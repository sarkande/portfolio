import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ProjectResponse } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private apiService: ApiService) { }

  createProject(projectData: ProjectResponse, userId: number): Observable<any> {
    return this.apiService.post('/project?userId=' + userId, projectData);
  }

  getProject(project_slug: number): Observable<ProjectResponse> {
    return this.apiService.get('/projects/' + project_slug);
  }
  getProjects(): Observable<ProjectResponse> {
    return this.apiService.get('/projects');
  }

}
