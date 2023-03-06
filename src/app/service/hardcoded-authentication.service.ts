import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    console.log(password)
    if(username === "yerayd" && password === "hola"){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }else{
      return false;
    }
  }
  isUsserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
