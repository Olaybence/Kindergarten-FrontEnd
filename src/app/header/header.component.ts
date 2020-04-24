import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MenuItem } from '../utils/menuItem';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MenuEditorComponent } from '../menu-editor/menu-editor.component';
import { Globals } from '../utils/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  globals: Globals;
  result: string;
  selected: String;
  menuItems: Array<MenuItem> = [
    new MenuItem("Bemutatkozás", [ "Madarász óvoda", "Zöld Óvoda", "Dokumentumok" ]),
    new MenuItem("Alapítvány", [  "Célja", "Adatai" ]),
    new MenuItem("Programok", [ "Madarászás- programok", "Alapítányi programok", "Korábbi programok" ]),
    new MenuItem("Galéria",[  "Cica csoport", "Katica csoport", "Maci csoport" ,"Süni csoport" ,"Bagoly csoport", "Mókus csoport", "Udvar", "Gyermekeink munkái", "VAN KÉPÜNK RÓLA" ]),
    new MenuItem("Kapcsolat / Othon-ovi",[ "Ajánlott oldalak", "Elérhetőségeünk" ]),
    new MenuItem("Étkezés"),
  ];
  

  constructor(public dialog: MatDialog, globals: Globals) {
    this.globals = globals;
  }

  ngOnInit() { }

  select(item: MenuItem) {
    this.selected = item.title;
  }

  addMenuItem() {
    console.log('addMenuItem');
    const dialogRef = this.dialog.open(MenuEditorComponent, {
      width: '90%',
      height: '90%',
      data: { menup: null }
    });
  }

  addSubmenuItem(menup: MenuItem) {
    console.log("addSubmenuItem", menup);
    const dialogRef = this.dialog.open(MenuEditorComponent, {
      width: '90%',
      height: '90%',
      data: { menup: menup }
    });
  }

  openDialog(action,obj = null) {
    console.log('openDialog',action,obj);
    const dialogRef = this.dialog.open(MenuEditorComponent, {
      width: '90%',
      height: '90%',
      data: { obj: obj, action: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('afterClosed',result);
      if(result.event == 'Do'){
        this.processResult(result.data);
      }
    });
  }

  processResult(menuItem){
    var d = new Date();
    this.menuItems.push(new MenuItem('asd'));
  }
}
