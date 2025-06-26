import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '../interfaces/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private apiService: ApiService) { }

  createProject(projectData: ProjectModel): Observable<any> {
    return this.apiService.post('/projects', projectData);
  }
  updateProject(project_slug: string, projectData: ProjectModel): Observable<any> {
    return this.apiService.put('/projects/' + project_slug, projectData);
  }

  getProject(project_slug: string): Observable<ProjectModel> {
    return this.apiService.get('/projects/' + project_slug);
  }
  getProjects(): Observable<ProjectModel[]> {
    return this.apiService.get('/projects');
  }
  deleteProject(project_slug: string): Observable<any> {
    return this.apiService.delete('/projects/' + project_slug);
  }
}
