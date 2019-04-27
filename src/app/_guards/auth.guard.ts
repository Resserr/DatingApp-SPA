import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private alertService: AlertifyService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.logedIn()) {
      return true;
    }

    this.alertService.error('You have not permission to check this page.');
    this.router.navigate(['/home']);
    return false;
  }
}
