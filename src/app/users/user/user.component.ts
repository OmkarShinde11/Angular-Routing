import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  users:{id:number,name:string};
  ngOnInit(): void {
    this.users={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    this.route.params.subscribe((params:Params)=>{
       this.users.id=params['id'];
       this.users.name=params['name']
    })
  }


}
