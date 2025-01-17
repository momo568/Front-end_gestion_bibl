import { Component, numberAttribute } from '@angular/core';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import {   RouterModule } from '@angular/router';
import { ReservationModule } from '../../reservation/reservation.module';
import { Reservation, ReservationService } from '../../services/reservation.service';
import { ViewRComponent } from '../view-r/view-r.component';
import { EditRComponent } from '../edit-r/edit-r.component';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-index-r',
  imports: [ReservationModule,SidebarComponent,RouterModule,CommonModule,
    SidebarComponent,ViewRComponent,EditRComponent
  ],
  templateUrl: './index-r.component.html',
  styleUrl: './index-r.component.css'
})
export class IndexRComponent {

reservations: Reservation[] = [];
router:any;




constructor (public reservationService: ReservationService){}
navigateToCreate(): void {
  this.router.navigate(['/dashboard/reservations/create']);


}
ngOnInit(): void {
  this.reservationService.getAll().subscribe((data:Reservation[])=>{
    this.reservations = data;
    console.log(this.reservations);
  });
  // deleteReservation
}


delete(id: number): void {
  this.reservationService.delete(id).subscribe(res => {
    this.reservations = this.reservations.filter(item => item.id !== id);
    console.log('resrervations deleted successfully!');
  });
}
}

  // @param id number
  // deleteReservation(id: number): void {
  //   this.reservationService.deleteReservation(id).subscribe(() => {
  //     this.reservation = this.reservation.filter(reservation => reservation.id!== id);
  //   });
  // }
  
 

 
