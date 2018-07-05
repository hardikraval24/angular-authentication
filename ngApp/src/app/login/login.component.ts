import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(
    private _auth:AuthService,
    private _router : Router,
    private _app : AppComponent
  ) {}

  ngOnInit() {
  }

  loginUser()
  {
    this._app.loading = true;
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem("token",res.data.token);        
        this._router.navigate(["/special"]);
      },
      err => console.log(err),
    );
    this._app.loading = false;
  }

}
