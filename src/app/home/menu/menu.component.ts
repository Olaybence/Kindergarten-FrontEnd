import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemService } from 'src/app/service/data/MenuItemService';
import { ADMIN_MODE } from 'src/app/app.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  result: String;
  selected: String;
  menuItems: Array<Array<String>>;
  ADMIN_MODE: number = ADMIN_MODE;

  constructor(private routeDir: Router,
              private miService: MenuItemService) {
    this.miService.getMenuItems().subscribe((menuItems: String[][]) => {
      console.log('menuItemService answer:', menuItems);
      this.menuItems = menuItems;
      console.log("Menu from server:",this.menuItems);
    });
  }

  ngOnInit() { }

  select(item: String) {
    console.log('selected: ', item);
    this.routeDir.navigate(["home", item]);
  }
}
