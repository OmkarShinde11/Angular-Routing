
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Params, Route, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from 'src/app/Guards/deactivate.guard';
import { ServerService } from 'src/app/Service/server.service';
import { serverList } from '../serverList';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanDeactivate<canComponentDeactivate>{
serverName:string='';
serverStatus:string=''
serverId:number;
serverList:serverList[]=[];
allowedit=false;
upadateStatus=false;
  constructor(private serverService:ServerService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
   let  id=this.route.snapshot.params['id']
   id=Number(id);
   console.log(id)
   this.serverList=this.serverService.getServer(id);
   console.log(this.serverList);
   this.serverName=this.serverList[0].name;
   this.serverStatus=this.serverList[0].status;
   this.serverId=this.serverList[0].id;
   console.log(this.route.snapshot.queryParams)
   this.route.queryParams.subscribe((queryParams:Params)=>{
     this.allowedit=queryParams['allowEditing']==='1'?true:false;
   })
   }
  updateServer(){
    debugger;
    this.serverService.updateServer(this.serverId,{name:this.serverName,status:this.serverStatus})
    this.upadateStatus=true;
    this.router.navigate(['/'])
  }
  getServer(){
   
    this.serverService.getServer(this.serverId)
  }
  canDeactivate():Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean{
    if(!this.allowedit){
      return true
    }
    if((this.serverName!=this.serverList[0].name || this.serverStatus!=this.serverList[0].status)&& !this.upadateStatus){
      return confirm('Do you want to leave this page')
    }
    else {
      return true
    } 
    
  }
}
