import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { ProfileStorageTestService } from './profile-storage-test.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: ProfileStorageTestService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    console.log(this.auth.isAuthenticated());
    return new Promise((resolve, rejects) => {
      if (!this.auth.isAuthenticated()) {
        console.log('false');
        this.router.navigate(['/folder/user/login']);
        rejects(false);
      }
      console.log('true');
      resolve(true);
    });
  }
}
