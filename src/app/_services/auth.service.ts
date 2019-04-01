import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mainUrl: any = 'http://localhost:5000/api/auth/';
  constructor(private httpClient: HttpClient) {}

  // method responsible for login operation with returning user token
  logIn(user: any): Observable<void> {
    return this.httpClient.post(this.mainUrl + 'login', user)
    .pipe(
      map( (data: any) => {
        if (data) {
          localStorage.setItem('token', data.generatedToken);
        }
      })
    );
  }
  register(user: any): Observable<Object> {
    return this.httpClient.post(this.mainUrl + 'register', user);
  }
}
