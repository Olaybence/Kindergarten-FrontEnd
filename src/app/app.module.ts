import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Globals } from './utils/globals';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MenuEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [

  ],
  providers: [Globals, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
