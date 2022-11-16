import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  showlogin: boolean=true;
  constructor() { }

  showLogin() {
    if(localStorage.getItem('auth-token')){
      this.showlogin = false;
    }else{
      this.showlogin = true;
    } 
  }
}
