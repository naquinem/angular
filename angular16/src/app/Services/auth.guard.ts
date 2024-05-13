import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './users.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const services = inject(UsersService);

  if(services.access()){
    return true;
  } else{
    router.navigate(['/']);
    return false
  }

};
