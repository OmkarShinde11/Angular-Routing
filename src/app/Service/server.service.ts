import { Injectable } from '@angular/core';
import { serverList } from '../servers/serverList';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
private serverList:serverList[]=[
  new serverList(1,'Omkar','Online'),
  new serverList(2,'Mayur','Offline'),
  new serverList(3,'Sid','Online')
]
  constructor() { }
  addServer(data:serverList){
   this.serverList.push(data);
  }

  getServers(){
    return this.serverList;
  }
  
  getServer(id:number){
    const data=this.serverList.filter((item)=>{
      let a=item.id===id;
      console.log(a);
      return a
    })
    return data;
  }
  
  updateServer(id:number,data:{name:string,status:string}){
    const index= this.serverList.findIndex((number)=>{
        let indexNumber=number.id===id;
        return indexNumber;
    })

    return this.serverList[index].name=data.name,this.serverList[index].status=data.status
  }
}

