import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

export const authGuard: CanActivateFn = (route, state) => {
  const firebaseService = inject(FirebaseService);
  const router = inject(Router);

  const actualUserMail = firebaseService.actualUserMail; 
  
  console.log('guard value', actualUserMail);

  if (actualUserMail == undefined) {
    router.navigateByUrl('login');
    return false;
  }

  return true;
};