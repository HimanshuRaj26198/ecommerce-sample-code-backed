import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signupUrl = 'http://localhost:3000/user/signup';
  signinUrl = 'http://localhost:3000/user/signin';

  signup(data: any) {
    return this.http.post(this.signupUrl, data);
  }

  signIn(data: any) {
    return this.http.post(this.signinUrl, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  logOut() {
    return localStorage.removeItem('token');
  }
}
