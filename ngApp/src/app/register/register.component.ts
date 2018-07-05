import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};

  constructor(
    private _auth:AuthService,
    private _router: Router,
    private _app: AppComponent
  ) { }

  ngOnInit() {
  }

  registerUser()
  {
    this._app.loading = true;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem("token",res.data.token)        
        this._router.navigate(['/special']);
      },
      err => console.log(err)
    );
    this._app.loading = false;
  }

}
