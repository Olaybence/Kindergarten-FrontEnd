import { Component, OnInit } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { MenuItemService } from '../service/data/MenuItemService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showFiller = false;
  mode = new FormControl('over');

  constructor(private miService: MenuItemService) {
  }

  ngOnInit(): void {
    document.body.classList.remove('bd-img');
  }
}
