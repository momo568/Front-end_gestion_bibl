import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
  getAll(): Observable<Livre[]> {
    return this.httpClient.get(`${this.apiURL}/getAll`, { responseType: 'text' }).pipe(
      map((rawResponse) => {
        try {
          const parsedResponse = JSON.parse(rawResponse); // Manually parse the response
          if (!Array.isArray(parsedResponse)) {
            throw new Error('Response is not an array');
          }
          return parsedResponse as Livre[];
        } catch (error) {
          console.error('Failed to parse response:', rawResponse);
          throw error; // Rethrow to handle in catchError
        }
      }),
      catchError(this.errorHandler)
    );
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

  update(id: number, livre: Livre): Observable<Livre> {
    return this.httpClient
      .put<Livre>(`${this.apiURL}/update/${id}`, livre, this.httpOptions)
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
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      console.error('Client-side error:', error.error.message);
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      console.error(
        `Server-side error:\nStatus: ${error.status}\nResponse Body:`,
        error.error
      );
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
  
}