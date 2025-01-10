import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Livre } from './livre';

@Injectable({
  providedIn: 'root',
})
export class LivreService {
  private apiURL = 'http://localhost:9090/projetnourouma/api/livre'; // Corrected base URL

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  /**
   * Get all Livres
   *
   * @return Observable<Livre[]>
   */
  getAll(): Observable<Livre[]> {
    return this.httpClient.get<Livre[]>(`${this.apiURL}/getAll`)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Get a Livre by ID
   *
   * @param id number
   * @return Observable<Livre>
   */
  find(id: number): Observable<Livre> {
    return this.httpClient.get<Livre>(`${this.apiURL}/get/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Create a new Livre
   *
   * @param livre Livre
   * @return Observable<Livre>
   */
  create(livre: Livre): Observable<Livre> {
    return this.httpClient.post<Livre>(`${this.apiURL}/add`, livre, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Update an existing Livre
   *
   * @param livre Livre
   * @return Observable<Livre>
   */
  update(id: number, livre: Livre): Observable<Livre> {
    return this.httpClient.put<Livre>(`${this.apiURL}/update`, livre, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Delete a Livre by ID
   *
   * @param id number
   * @return Observable<void>
   */
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiURL}/delete/${id}`, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Handle errors
   *
   * @param error any
   * @return Observable<never>
   */
  errorHandler(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
