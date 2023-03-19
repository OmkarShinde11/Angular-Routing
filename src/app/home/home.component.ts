import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  loadServers(){
    this.router.navigate(['/Servers'])
  }
  loadUsers(){
    this.router.navigate(['/Users'])
  }
  logIn(){
    this.authService.login()
  }
  logOut(){
    this.authService.logout()
  }

}
