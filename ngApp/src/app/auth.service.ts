import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = `${environment.api}/auth/register`;
  private _loginUrl = `${environment.api}/auth/login`;

  constructor(private http: HttpClient) { }

  registerUser(user)
  {
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user)
  {
    return this.http.post<any>(this._loginUrl,user);
  }

  loggedIn()
  {
    return !!localStorage.getItem("token");
  }

  getToken()
  {
    return localStorage.getItem("token");
  }

  removeToken()
  {
    return localStorage.removeItem("token");
  }
}
