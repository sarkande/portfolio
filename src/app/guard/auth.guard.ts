import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  console.log('AuthGuard activated, you shall not pass');
  // const auth = inject(AuthService);

  const router = inject(Router);

  // Extract lang  from the route
  const lang = route.params['lang'] || 'fr';
  console.log('Language from route:', lang);
  // if (!auth.isLoggedIn()) {
    router.navigate([lang + '/login']);
    return false;
  // }
  // return true;
};
