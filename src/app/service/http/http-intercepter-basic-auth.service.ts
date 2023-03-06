import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthentiactionService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.basicAuthentiactionService.getAuthenticatedToken();
    let username = this.basicAuthentiactionService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }

}
