import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
  {
    path: ':lang', // prefixe langue dynamique
    children: [
      { path: '', component: HomeComponent }, // /fr ou /en
      { path: 'projects', component: ProjectsComponent }, // /fr/projects ou /en/projects
      { path: 'resume', component: ResumeComponent }, // /fr/resume ou /en/resume
    ],
  },
  { path: '', redirectTo: 'fr', pathMatch: 'full' },
  { path: '**', redirectTo: 'fr' },
];
