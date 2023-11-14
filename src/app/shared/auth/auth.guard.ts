import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currUser.pipe(
    take(1),
    map((user) => {
      const isAuth = !!user;

      if (isAuth) {
        // If we are on the auth page, redirect to the homePage page
        if (route.routeConfig?.path === 'auth') {
          return router.createUrlTree(['/homePage']);
        }

        return true;
      } else {
        if (route.routeConfig?.path === 'auth') {
          return true;
        }

        return router.createUrlTree(['/auth']);
      }
    })
  );
};
