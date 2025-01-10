import { Component } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import {   RouterModule } from '@angular/router';

@Component({
  selector: 'app-index-r',
  imports: [SidebarComponent,RouterModule],
  templateUrl: './index-r.component.html',
  styleUrl: './index-r.component.css'
})
export class IndexRComponent {

}
