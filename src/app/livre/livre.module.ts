import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
 import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ViewLivreComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule,SidebarComponent,RouterLink,ViewLivreComponent,EditComponent
  ]
})
export class LivreModule { }
