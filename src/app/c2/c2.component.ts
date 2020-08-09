import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private route:ActivatedRoute) { }
  number;
  ngOnInit(): void {
    this.number =  this.route.snapshot.paramMap.get('num')
  }

}
