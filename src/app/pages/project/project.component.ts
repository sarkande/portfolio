// project.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectModel } from '../../interfaces/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project!: ProjectModel;
  allProjects: ProjectModel[] = [];
  toc: Array<{ level: number; text: string; slug: string }> = [];
  prevProject?: ProjectModel;
  nextProject?: ProjectModel;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return this.router.navigate(['/404']);

    // charge tous les projets pour déterminer prev/next
    this.projectService.getProjects().subscribe({
      next: projects => {
        this.allProjects = projects;
        const idx = projects.findIndex(p => p.slug === slug);
        if (idx === -1) return this.router.navigate(['/404']);
        this.project = projects[idx];
        this.prevProject = projects[idx - 1];
        this.nextProject = projects[idx + 1];
        this.buildToc(this.project.content);
      },
      error: () => this.router.navigate(['/404'])
    });
  }

  private buildToc(markdown: string) {
    const regex = /^(#{2,6})\s+(.*)$/gm;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(markdown))) {
      const level = match[1].length;
      const text = match[2].trim();
      const slug = text.toLowerCase().replace(/[^\w]+/g, '-');
      this.toc.push({ level, text, slug });
    }
  }
}
