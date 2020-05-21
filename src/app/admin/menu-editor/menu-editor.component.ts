import { Component, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemService } from 'src/app/service/data/MenuItemService';
import { FormControl } from '@angular/forms';

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.css']
})
export class MenuEditorComponent {

  action: string;
  data: any;
  title: string;
  menuItems: Array<Array<String>>;
  
  addNewMI: boolean = false;
  newMIformControl: FormControl = new FormControl('');

  constructor(private router: Router,
    private miService: MenuItemService) {
    
    this.miService.getMenuItems().subscribe((ans: String[][]) => {
      this.menuItems = ans;
      console.log("Menu from server:", this.menuItems);
    });
  }

  select(item: String) {
    console.log('menu point selected: ',item);
    this.router.navigate(['admin', item]);
  }
  
  edit(item: String) {
    console.log('edit',item);
  }
  
  delete(item: String) {
    console.log('delete',item);
  }

  addMenuItem() {
    this.addNewMI = false;
    console.log('addMenuItem');
  }
}
