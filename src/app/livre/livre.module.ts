import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,BrowserModule,HttpClientModule,SidebarComponent,RouterLink,
  ]
})
export class LivreModule { }
