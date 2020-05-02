import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    document.body.classList.add('bd-img');
  }

}
