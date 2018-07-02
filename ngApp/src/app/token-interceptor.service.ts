import { Injectable,Injector } from '@angular/core'; // we may have to add Injector if use of auth service directly not works
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  // constructor(private injector : Injector) { }
  constructor(private authService : AuthService) { }

  intercept(req,next)
  {
    // let authService = this.injector.get(AuthService); // we have to do this way because still we have open issues on github

    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${this.authService.getToken()}`
      }
    });

    return next.handle(tokenizedReq)
  }
  
}
