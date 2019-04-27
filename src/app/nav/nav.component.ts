import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  jwtDecoder: JwtHelperService = new JwtHelperService();

  constructor(public serviceAuth: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
    const token: string = localStorage.getItem('token');
    if (token) {
      this.serviceAuth.decodedToken = this.jwtDecoder.decodeToken(token);
    }
  }

  logIn(): void {
    this.serviceAuth.logIn(this.model).subscribe(() => this.alertifyService.success('Successfully loged in: ' + this.model),
    error => this.alertifyService.error(error),
    () => this.router.navigate(['']));
  }

  logedIn(): boolean {
    return this.serviceAuth.logedIn();
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.alertifyService.success('Successfully loged out.');
    this.router.navigate(['/home']);
  }

}
