import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from 'src/app/Service/server.service';
import { serverList } from '../serverList';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 serverList:serverList[];
  constructor(private serverService:ServerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
     let id= this.route.snapshot.params['id'];
     id=Number(id);
     console.log(id);
    this.serverList=this.serverService.getServer(id);
    console.log(this.serverList);
    this.route.params.subscribe((params:Params)=>{
      this.serverList=this.serverService.getServer(Number(params['id']));
    })
  }
  onEdit(id:number){
    this.router.navigate(['/Servers',id,'edit'],{queryParamsHandling:'preserve'});
    console.log(id)
  }
}
