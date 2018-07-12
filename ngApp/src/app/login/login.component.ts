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

  err_message : string;

  loginUserData = {
    email : '',
    password : ''
  };

  constructor(
    private _auth:AuthService,
    private _router : Router,
    private _app : AppComponent
  ) {
    this._auth.removeToken();
  }

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
      err => {
        this.err_message = err.error.message;
        this._app.loading = false;
        // console.log(err);
      },
    );
    
  }

}
