import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { Globals } from './utils/globals';

import { MenuEditorComponent } from './admin/menu-editor/menu-editor.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ArticleEditorComponent } from './admin/article-editor/article-editor.component';
import { LogoutComponent } from './admin/logout/logout.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MainArticlesComponent } from './home/main-articles/main-articles.component';
import { SideArticlesComponent } from './home/side-articles/side-articles.component';
import { MenuComponent } from './home/menu/menu.component';
import { HomeSettingsComponent } from './admin/home-settings/home-settings.component';
import { MainArticleService } from './service/data/MainArticleService';
import { SideArticleService } from './service/data/SideArticleService';
import { MenuItemService } from './service/data/MenuItemService';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'admin', 
    component: AdminComponent,
    // canActivate:[RouteGuardService]
    children: [
      {
        path: ':article',
        component: ArticleEditorComponent,
      },
      {
        path: '',
        component: HomeSettingsComponent
      }
    ]
  },
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: ':article',
        component: MainArticlesComponent
      },
      {
        path: '',
        component: MainArticlesComponent
      }
    ]
  },
  {
    path: '**', 
    redirectTo: '/home',
    pathMatch: 'full'
  }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    LogoutComponent,

    AdminComponent,
    MenuEditorComponent,
    ArticleEditorComponent,
    HomeSettingsComponent,
    
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    MainArticlesComponent,
    SideArticlesComponent,
    AdminHeaderComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserModule,

    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [ Globals, MatDialog, MainArticleService, SideArticleService, MenuItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
