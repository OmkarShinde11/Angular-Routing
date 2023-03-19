import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../Service/server.service';
import { serverList } from './serverList';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 serverList:serverList[];
  constructor(private serverService:ServerService ,private router:Router) { }

  ngOnInit(): void {
  
  this.serverList=this.serverService.getServers()
  }
  navigate(id:number){
    debugger;
    this.router.navigate(['/Servers',id,'edit'],{queryParams:{allowEditing:'1'},fragment:'loading'})
  }
  navigate1(id:number){
    this.router.navigate(['/Servers',id],{queryParams:{allowEditing:id===3?'1':'0'},fragment:'Loading'})
  }
}
