import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelAdminComponent } from './pages/panel-admin/panel-admin.component';
import { AuthGuard } from './guard/auth.guard';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectListComponent },
      { path: 'projects/:slug', component: ProjectComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'panel', component: PanelAdminComponent, canActivate: [AuthGuard], },
      { path: '404', component: ErrorNotFoundComponent },

    ],
  },
  { path: '', redirectTo: 'fr', pathMatch: 'full' },
  { path: '**', redirectTo: 'fr' },
];
