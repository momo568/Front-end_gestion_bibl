import { Reservation } from "../services/reservation.service";

export interface Livre {
  id: number;
  titre: string;
  isbn: string;
  dateEdition: string; // Date as a string in ISO format (e.g., "2025-01-19")
  categorie: Catg; // Enum representing the category
  reservations: Reservation[]; // List of reservations
}

// Enum for categorie
export enum Catg {
  HISTORIQUE = 'HISTORIQUE',
  SCIENCE = 'SCIENCE',
  FICTION = 'FICTION',
  // Add other categories as needed
}
