import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '../interfaces/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private apiService: ApiService) { }

  createProject(projectData: ProjectModel, userId: number): Observable<any> {
    return this.apiService.post('/project?userId=' + userId, projectData);
  }

  getProject(project_slug: string): Observable<ProjectModel> {
    return this.apiService.get('/projects/' + project_slug);
  }
  getProjects(): Observable<ProjectModel[]> {
    return this.apiService.get('/projects');
  }

}
