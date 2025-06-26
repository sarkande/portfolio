// src/app/panel-admin/panel-admin.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModel } from '../../interfaces/project.model';
import { ProjectService } from '../../services/project.service';
import { FormsModule } from '@angular/forms';

interface ParsedProject extends ProjectModel {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  contentFr: string;
  contentEn: string;

  technologiesStr?: string;
  tagsStr?: string;
  galleryStr?: string;
}

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

  quickCreate = false; 
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: projects => {
        this.projects = projects.map(p => this.parseProject(p));
      },
      error: err => {
        console.error('Error loading projects:', err);
      }
    });
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
      ...project,
      title: project.title,
      description: project.description,
      content: project.content,
      technologies: project.technologies || [],
      tags: project.tags || [],
      gallery: project.gallery || []
    };
    console.log('Projet à envoyer e:', projectToSend);

  }

}