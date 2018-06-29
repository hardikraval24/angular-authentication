import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost/restful/public/api/auth/register";
  private _loginUrl = "http://localhost/restful/public/api/auth/login";

  constructor(private http: HttpClient) { }

  registerUser(user)
  {
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user)
  {
    return this.http.post<any>(this._loginUrl,user);
  }
}
