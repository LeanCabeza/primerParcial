import { CanActivateFn, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { inject } from '@angular/core';


export const adminGuard: CanActivateFn = (route, state) => {
  const firebaseService = inject(FirebaseService);
  const router = inject(Router);
  const admins = ["admin@admin.com"]
  const actualMail = firebaseService.actualUserMail; 
  
  console.log('guard value', actualMail);

  if (admins.includes(actualMail)) {
    return true;
  } else {
    router.navigate(['badAccess']);
    return false;
  }
};