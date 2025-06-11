import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: ':lang', 
    children: [
      { path: '', component: HomeComponent }, 
      { path: 'projects', component: ProjectsComponent }, 
      { path: 'resume', component: ResumeComponent }, 
      { path: 'about', component: AboutComponent }, 
    ],
  },
  { path: '', redirectTo: 'fr', pathMatch: 'full' },
  { path: '**', redirectTo: 'fr' },
];
