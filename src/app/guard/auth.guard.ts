// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si l'utilisateur est authentifié, on laisse passer
  if (authService.isAuthenticated()) {
    return true;
  }

  // Sinon, on construit l'URL de redirection vers /{lang}/login
  // en passant l'URL originale dans queryParams pour un éventuel retour
  const lang = route.params['lang'] || 'fr';
  return router.createUrlTree(
    [lang, 'login'],
    { queryParams: { returnUrl: state.url } }
  );
};