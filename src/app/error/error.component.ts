import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage:string
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage=this.route.snapshot.data['message'];
    this.route.data.subscribe((value:Data)=>{
      this.errorMessage=value['message']
    })
  }

}
