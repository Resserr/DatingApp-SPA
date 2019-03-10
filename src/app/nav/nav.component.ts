import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private serviceAuth: AuthService) { }

  ngOnInit() {
  }

  logIn(): void {
    this.serviceAuth.logIn(this.model).subscribe(next => {
      console.log('Successfully loged in: ' + this.model);
    });
    console.log(this.model);
  }

  logedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

}