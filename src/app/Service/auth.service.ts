import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserLogin:boolean;
  constructor(private router:Router) { }

  login(){
    this.UserLogin=true;
  }
  logout(){
    this.UserLogin=false
  }

  authentication(){
    debugger;
    if(this.UserLogin){
      setTimeout(()=>{
        this.login()
      },10000)
    }
    else{
      this.router.navigate(['/'])
    }
    return this.UserLogin
    // const random= new Promise((resolve,reject)=>{
    //    setTimeout(() => {
    //     this.router.navigate(['/Servers'])
    //    }, 8000);
    // })
  }
}
