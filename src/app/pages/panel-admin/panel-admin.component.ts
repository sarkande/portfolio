// src/app/panel-admin/panel-admin.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModel } from '../../interfaces/project.model';
import { ProjectService } from '../../services/project.service';
import { FormsModule } from '@angular/forms';
import { ParsedProject } from '../../interfaces/parsed-project';


@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule, FormsModule
  ],
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss']
})
export class PanelAdminComponent implements OnInit {
  projects: ParsedProject[] = [];

  newProject: ParsedProject = this.getEmptyProject();

  quickCreate = false; 
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  /**  
   * Tente de JSON.parse la valeur, 
   * et retourne toujours un objet {fr, en} avec fallback.
   */
  private safeParse(value: any): { fr: string; en: string } {
    if (typeof value !== 'string') {
      // si ce n’est pas une chaîne, on le cast en chaîne
      const str = String(value);
      return { fr: str, en: str };
    }
    try {
      const obj = JSON.parse(value);
      const fr = typeof obj.fr === 'string' ? obj.fr : (typeof obj.en === 'string' ? obj.en : value);
      const en = typeof obj.en === 'string' ? obj.en : (typeof obj.fr === 'string' ? obj.fr : value);
      return { fr, en };
    } catch {
      // pas un JSON valide → on renvoie la même chaîne pour fr & en
      return { fr: value, en: value };
    }
  }

  /** Convertit un ProjectModel en ParsedProject en extrayant les champs fr/en */
  private parseProject(p: ProjectModel): ParsedProject {
    const title = this.safeParse(p.title);
    const desc = this.safeParse(p.description);
    const cont = this.safeParse(p.content);
    return {
      ...p,
      titleFr: title.fr,
      titleEn: title.en,
      descriptionFr: desc.fr,
      descriptionEn: desc.en,
      contentFr: cont.fr,
      contentEn: cont.en,
      technologiesStr: p.technologies?.join(', ') ?? '',
      tagsStr: p.tags?.join(', ') ?? '',
      galleryStr: p.gallery?.join('; ') ?? ''
    };
  }

  openQuickCreate() {
    this.quickCreate = true;
  }
  editProject(project: ParsedProject) {
    // Re-conversion des champs string -> tableau
    project.technologies = (project.technologiesStr || '').split(',').map(t => t.trim()).filter(Boolean);
    project.tags = (project.tagsStr || '').split(',').map(t => t.trim()).filter(Boolean);
    project.gallery = (project.galleryStr || '').split(';').map(t => t.trim()).filter(Boolean);

    // Recombine les champs JSON multilingues
    project.title = JSON.stringify({ fr: project.titleFr, en: project.titleEn });
    project.description = JSON.stringify({ fr: project.descriptionFr, en: project.descriptionEn });
    project.content = JSON.stringify({ fr: project.contentFr, en: project.contentEn });

    console.log('Projet prêt à envoyer :', project);

    // Conversion finale pour l'envoi, on utilise l'interface ProjectModel
    const projectToSend: ProjectModel = {
      id: project.id,
      slug: project.slug,
      title: project.title,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
      technologies: project.technologies || [],
      tags: project.tags || [],
      category: project.category,
      thumbnailUrl: project.thumbnailUrl,
      gallery: project.gallery || [],
      gitUrl: project.gitUrl,
      liveUrl: project.liveUrl,
      role: project.role || '',
      isFeatured: project.isFeatured || false,
      active: project.active,
      content: project.content
    };
    console.log('Projet à envoyer e:', projectToSend);
      this.projectService.updateProject(project.slug, projectToSend).subscribe({
      next: (response) => {
        console.log('Projet créé avec succès:', response);
        // Met à jour la liste des projets après la création
        this.loadProjects();
      },
      error: (error) => {
        console.error('Erreur lors de la création du projet:', error);
      }
    });
  }

  deleteProject(project: ParsedProject) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le projet "${project.titleFr}" ?`)) {
      this.projectService.deleteProject(project.slug).subscribe({
        next: () => {
          this.projects = this.projects.filter(p => p.id !== project.id);
          console.log(`Projet "${project.titleFr}" supprimé avec succès.`);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression du projet:', error);
        }
      });
    }
  }

  createProject() {
    let projectToCreate: ProjectModel;

    projectToCreate = {
      slug: this.newProject.slug,
      title: JSON.stringify({ fr: this.newProject.titleFr, en: this.newProject.titleEn }),
      description: JSON.stringify({ fr: this.newProject.descriptionFr, en: this.newProject.descriptionEn }),
      content: JSON.stringify({ fr: this.newProject.contentFr, en: this.newProject.contentEn }),
      startDate: this.newProject.startDate,
      endDate: this.newProject.endDate,
      technologies: this.newProject.technologies || [],
      tags: this.newProject.tags || [],
      category: this.newProject.category,
      thumbnailUrl: this.newProject.thumbnailUrl,
      gallery: this.newProject.gallery || [],
      gitUrl: this.newProject.gitUrl,
      liveUrl: this.newProject.liveUrl,
      role: this.newProject.role || '',
      isFeatured: this.newProject.isFeatured || false,
      active: true // Par défaut, le projet est actif
    };
    console.log('Projet à créer:', projectToCreate);

    this.projectService.createProject(projectToCreate).subscribe({
      next: (response) => {
        console.log('Projet créé avec succès:', response);
        // Réinitialise le formulaire après la création
        this.newProject = this.getEmptyProject();
        this.quickCreate = false; // Ferme le formulaire de création rapide
        // Recharge la liste des projets
        this.loadProjects();
      },
      error: (error) => {
        console.error('Erreur lors de la création du projet:', error);
      }
    });
  }



  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: projects => {
        this.projects = projects.map(p => this.parseProject(p));
      },
      error: err => {
        console.error('Error loading projects:', err);
      }
    });
  }

  private getEmptyProject(): ParsedProject {
    return {
      id: 0,
      slug: '',
      title: '',
      description: '',
      content: '',
      startDate: '',
      endDate: '',
      technologies: [],
      tags: [],
      category: '',
      thumbnailUrl: '',
      gallery: [],
      gitUrl: '',
      liveUrl: '',
      role: '',
      isFeatured: false,
      active: true,
      titleFr: '',
      titleEn: '',
      descriptionFr: '',
      descriptionEn: '',
      contentFr: '',
      contentEn: '',
      technologiesStr: '',
      tagsStr: '',
      galleryStr: ''
    };
  }
}