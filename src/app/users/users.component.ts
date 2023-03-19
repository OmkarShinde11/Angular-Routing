import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[
    {
      id:1,
      name:'omkar'
    },
    {
      id:2,
      name:'Sid'
    },
    {
      id:3,
      name:'Mayur'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
  }



}
