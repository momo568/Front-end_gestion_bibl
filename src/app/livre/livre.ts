export interface Livre {
    id: number;              
    titre: string;            
    isbn: string;            
    dateEdition: Date;        
    categorie: string;        
    reservations?: any[];  
  }
  