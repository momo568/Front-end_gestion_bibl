import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AddRComponent } from '../rerservation/add-r/add-r.component';
import { EditRComponent } from '../rerservation/edit-r/edit-r.component';
import { ViewRComponent } from '../rerservation/view-r/view-r.component';
import { IndexRComponent } from '../rerservation/index-r/index-r.component';
import { HttpClient } from '@angular/common/http';
  


@NgModule({
  declarations: [],
   
  imports: [
    CommonModule,
    RouterModule, SidebarComponent,RouterLink ,AddRComponent,EditRComponent,ViewRComponent,IndexRComponent,
  ]
})
export class ReservationModule { }
