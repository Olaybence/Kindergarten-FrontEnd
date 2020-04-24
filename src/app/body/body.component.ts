import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input('Default Name') title: String;
  
  constructor() {
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log(this.title);
  }

}
