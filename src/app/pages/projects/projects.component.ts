import { Component } from '@angular/core';
import { mockProjects } from '../../interfaces/mock-projects';
import { ProjectModel } from '../../interfaces/project.model';
import { ProjectCardComponent } from '../../components/project-card.component';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from '../../components/search-sidebar/search-sidebar.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, SearchSidebarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: ProjectModel[] = mockProjects;
  filtered: ProjectModel[] = [...this.projects]; // Liste filtrée

  private currentSearch = '';
  private currentTags: string[] = [];


  // Méthode appelée quand la recherche change
  onSearch(term: string) {
    this.currentSearch = term;
    this.applyFilters();
  }

  // Méthode appelée quand un tag est sélectionné
  onTags(tags: string[]) {
    this.currentTags = tags;
    this.applyFilters();
  }

  private applyFilters() {
    this.filtered = this.projects.filter((project) => {
      const matchSearch =
        !this.currentSearch ||
        project.title.toLowerCase().includes(this.currentSearch) ||
        project.description.toLowerCase().includes(this.currentSearch);

      const matchTags =
        this.currentTags.length === 0 ||
        this.currentTags.some(tag => project.technologies.includes(tag));

      return matchSearch && matchTags;
    });
  }

  get allTags(): string[] {
    const tagSet = new Set<string>();
    this.projects.forEach((p) =>
      p.technologies.forEach((t) => tagSet.add(t))
    );
    return Array.from(tagSet).sort();
  }
}
  