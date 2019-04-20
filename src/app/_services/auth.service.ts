import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mainUrl: any = 'http://localhost:5000/api/auth/';
  jwtDecoder: JwtHelperService = new JwtHelperService();
  decodedToken: any;
  constructor(private httpClient: HttpClient) {}

  // method responsible for login operation with returning user token
  logIn(user: any): Observable<void> {
    return this.httpClient.post(this.mainUrl + 'login', user)
    .pipe(
      map( (data: any) => {
        if (data) {
          localStorage.setItem('token', data.generatedToken);
          this.decodedToken = this.jwtDecoder.decodeToken(data.generatedToken);
          console.log(this.decodedToken);
        }
      })
    );
  }
  register(user: any): Observable<Object> {
    return this.httpClient.post(this.mainUrl + 'register', user);
  }

  logedIn(): boolean {
    return !this.jwtDecoder.isTokenExpired(localStorage.getItem('token'));
  }
}
