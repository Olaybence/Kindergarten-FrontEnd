import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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

  action : string;
  data : any;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<MenuEditorComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: UsersData) {

      this.data = { ...dialogData };
      this.action = this.data.action;

      console.log('constructor', this.action, this.data);
  }

  doAction() {
    console.log('doAction');
    this.dialogRef.close({
      event: "Do",
      action: this.action,
      data: this.data
    });
  }

  closeDialog(){
    console.log('closeDialog');
    this.dialogRef.close({
      event: 'Cancel',
      action: this.action,
      data: this.data
    });
  }

}
