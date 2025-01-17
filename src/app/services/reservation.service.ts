import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 

export interface Reservation {
  id: number;
  dateRetour: Date;
  dateAnnulation: Date;
  dateReservation: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = 'http://localhost:9090/projetnourouma/api/reservation';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  // Fetch all reservations
  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/getAll`);
  }

  // Fetch a reservation by ID
  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/get/${id}`);
  }

  // Add a new reservation
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(
      `${this.baseUrl}/add`,
      reservation,
      this.httpOptions
    );
  }

  // Update an existing reservation
  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.baseUrl}/update/${id}`,
      reservation,
      this.httpOptions
    );
  }


  /**
   * Delete a reservation by ID
   *
   * @param id number
   * @return Observable<void>
   */  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, this.httpOptions);
   
  }
}
