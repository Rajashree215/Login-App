import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('email');
  const router = inject(Router);
  if (!token) {
    router.navigate(['']);
    return false;
  }
  return true;
};
