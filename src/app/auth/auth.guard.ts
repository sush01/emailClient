import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map , tap} from 'rxjs';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  return authService.isAuthenticated().pipe(
    tap(authenticated => {
      if (!authenticated){
        router.navigate(['/login']);
      }
    }),
    map(authenticated => authenticated)
  );
};
