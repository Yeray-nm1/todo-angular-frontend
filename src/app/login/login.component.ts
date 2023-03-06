import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "YerayD"
  password = ""
  errorMsg = "Invalid Credentials"
  invalidLogin = false

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      {
        next: (data) => {
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error: (error) => {
          this.invalidLogin = true
        }
      }
    )
  }
}
