import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelAdminComponent } from './pages/panel-admin/panel-admin.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { LangGuard } from './guards/lang.guard';

// on précise : childRoutes est un Routes, donc Route[]
const childRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:slug', component: ProjectComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'panel',
    component: PanelAdminComponent,
    canActivate: [AuthGuard],
  },
  { path: '404', component: ErrorNotFoundComponent },
  // toute URL non listée ici renvoie à /:lang/404
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LangGuard],
    children: childRoutes,   // ➜ plus d’erreur, c’est bien un Routes
  },

  // redirige la racine vers /fr
  { path: '', redirectTo: 'fr', pathMatch: 'full' },

  // tout le reste vers /fr/404
  { path: '**', redirectTo: 'fr/404', pathMatch: 'full' },
];