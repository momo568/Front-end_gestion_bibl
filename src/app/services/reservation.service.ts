import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface Reservation {
  livreId: any;
  utilisateurId: any;
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

  // HTTP Options
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
  find(id: number): Observable<Reservation> {
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
    return this.http.put<Reservation>(`${this.baseUrl}/update/${id}`, reservation, this.httpOptions)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la mise à jour de la réservation:', error);
          return throwError(error); // Propager l'erreur pour la gérer au niveau du composant ou du service appelant
        })
      );
  }
  
  // Delete a reservation by ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`, this.httpOptions);
  }
}
