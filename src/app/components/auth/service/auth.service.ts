import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estadoLogeo : boolean = false;
  
  logIn(){
    this.estadoLogeo = true;
  }

  logOut(){
    this.estadoLogeo = false;
  }
  
}
