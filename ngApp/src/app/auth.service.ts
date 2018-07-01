import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost/angular-authentication/restful/public/api/auth/register";
  private _loginUrl = "http://localhost/angular-authentication/restful/public/api/auth/login";

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
}
