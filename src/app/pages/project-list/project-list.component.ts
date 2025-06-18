import { Component, OnInit } from '@angular/core';
// import { mockProjects } from '../../interfaces/mock-projects.tsd';
import { ProjectModel } from '../../interfaces/project.model';
import { ProjectCardComponent } from '../../components/project-card.component';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from '../../components/search-sidebar/search-sidebar.component';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, SearchSidebarComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  projects: ProjectModel[] = [];
  filtered: ProjectModel[] = [...this.projects];

  minYear: number = 2000;
  maxYear: number = new Date().getFullYear();


  private currentSearch = '';
  private currentTags: string[] = [];
  private currentGitPublic = false;
  private currentObsolete = false;
  private currentStartYear: number = this.minYear;
  private currentEndYear: number = this.maxYear;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        console.log('Projects loaded:', projects);
        this.projects = projects;
        this.filtered = [...this.projects];

        const years = this.projects.flatMap((p) => {
          const start = parseInt(p.startDate.slice(0, 4));
          const end = p.endDate ? parseInt(p.endDate.slice(0, 4)) : start;
          return [start, end];
        });

        this.minYear = Math.min(...years);
        this.maxYear = Math.max(...years);
        this.currentStartYear = this.minYear;
        this.currentEndYear = this.maxYear;
      },
      error: (error) => {
        console.log('Error:', error);
      },
    });
  }

  onFiltersChanged(filters: {
    searchText: string;
    tags: string[];
    showGitPublic: boolean;
    showObsolete: boolean;
    startYear: number;
    endYear: number;
  }) {
    this.currentSearch = filters.searchText;
    this.currentTags = filters.tags;
    this.currentGitPublic = filters.showGitPublic;
    this.currentObsolete = filters.showObsolete;
    this.currentStartYear = filters.startYear;
    this.currentEndYear = filters.endYear;

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
        this.currentTags.some((tag) => project.technologies.includes(tag));

      const matchGitPublic =
        !this.currentGitPublic || !!project.gitUrl;

      const matchObsolete =
        !this.currentObsolete || project.active === false;

      const projectStartYear = parseInt(project.startDate.slice(0, 4));
      const projectEndYear = project.endDate
        ? parseInt(project.endDate.slice(0, 4))
        : projectStartYear;

      const matchYearRange =
        projectStartYear <= this.currentEndYear &&
        projectEndYear >= this.currentStartYear;

      return (
        matchSearch &&
        matchTags &&
        matchGitPublic &&
        matchObsolete &&
        matchYearRange
      );
    });
  }

  get allTags(): string[] {
    const tagSet = new Set<string>();
    this.projects.forEach((p) =>
      p.technologies.forEach((t) => tagSet.add(t))
    );
    return Array.from(tagSet).sort();
  }
  handleClickProject(slug: string) {
    // Navigate to the project details page
    console.log('Project clicked:', slug);
    this.router.navigate([slug], { relativeTo: this.route });
  }
}
