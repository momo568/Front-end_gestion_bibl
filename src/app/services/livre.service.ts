import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livre {
  id: number;
  titre: string;
  isbn: string;
  dateEdition: Date;
  categorie: string;
}

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private   baseUrl="http://localhost:9090/projetnourouma/api/livre"

  constructor(private http: HttpClient) {}

  getAllLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.baseUrl}/getAll`);
  }

  getLivreById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.baseUrl}/get/${id}`);
  }

  addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.baseUrl}/add`, livre);
  }

  updateLivre(id: number,livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${this.baseUrl}/update/${id}`, livre);
  }

  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
