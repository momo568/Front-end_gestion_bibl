import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Import des composants au lieu de les déclarer directement
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AddRComponent } from './add-r/add-r.component';
import { EditRComponent } from './edit-r/edit-r.component';
import { ViewRComponent } from './view-r/view-r.component';
import { IndexRComponent } from './index-r/index-r.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,SidebarComponent,AddRComponent,EditRComponent,ViewRComponent,IndexRComponent
  ],
  // Déclarez les composants à importer dans les templates du module
 
})
export class ReservationModule { }
