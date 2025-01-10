import { Component } from '@angular/core';
 import { RouterModule, RouterOutlet } from '@angular/router';
import { ReservationModule } from '../reservation/reservation.module';
import { IndexRComponent } from '../rerservation/index-r/index-r.component';
 @Component({
  selector: 'app-sidebar',
  imports: [RouterModule,ReservationModule,IndexRComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
