import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProjectModel } from '../../interfaces/project.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  project!: ProjectModel
  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Assuming the project ID is passed as a route parameter
    const projectSlug = this.route.snapshot.paramMap.get('slug');
    if (!projectSlug ) {
      console.error('Project slug is missing in the route parameters.');
      this.router.navigate(['/404']);
      return;
    }
    
    this.projectService.getProject(projectSlug).subscribe({
      next: (project) => {
        console.log('Projects loaded:', project);
        this.project = project;
      },
      error: (error) => {
        console.log('Error:', error);
        
        this.router.navigate(['/404']);
        return;
      },
    });
  
  }
}
