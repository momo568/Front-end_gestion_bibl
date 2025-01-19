// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { catchError, Observable, throwError } from 'rxjs';

// export interface Livre {
//   id: number;
//   titre: string;
//   isbn: string;
//   dateEdition: Date;
//   categorie: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class LivreService {
//   private   baseUrl="http://localhost:9090/projetnourouma/api/livre"

//   constructor(private http: HttpClient) {}

//   getAllLivres(): Observable<Livre[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/getAll`).pipe(
//     }

//   getLivreById(id: number): Observable<Livre> {
//     return this.http.get<Livre>(`${this.baseUrl}/get/${id}`);
//   }

//   addLivre(livre: Livre): Observable<Livre> {
//     return this.http.post<Livre>(`${this.baseUrl}/add`, livre);
//   }

//   updateLivre(id: number,livre: Livre): Observable<Livre> {
//     return this.http.put<Livre>(`${this.baseUrl}/update/${id}`, livre);
//   }

//   deleteLivre(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
//   }
//    /**
//    * Error Handling for HTTP Requests
//    */
//    private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'An unknown error occurred';
//     if (error.error instanceof ErrorEvent) {
//       // Client-side or network error
//       errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       // Backend error
//       errorMessage = `Server-side error: ${error.status} ${error.message}`;
//     }
//     console.error(errorMessage);
//     return throwError(() => new Error(errorMessage));
//   }
// }
