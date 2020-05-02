import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MenuItem } from '../../utils/menuItem';
import { MenuEditorComponent } from '../../admin/menu-editor/menu-editor.component';
import { Globals } from '../../utils/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  globals: Globals;
  result: string;
  selected: String;
  menuItems: Array<MenuItem>;
  

  constructor(private router: Router, globals: Globals) {
    this.globals = globals;
    // console.log(this.menuItems);
    // console.log(JSON.stringify(this.menuItems));
    // TODO: Load into the backend!
  }

  ngOnInit() { }

  select(item: MenuItem) {
    this.selected = item.title;
    this.router.navigate(['/' + item.title]);
  }
}
