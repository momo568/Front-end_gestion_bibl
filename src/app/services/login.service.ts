import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationRequest } from '../Modules/AuthenticationRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:9090/projetnourouma/api/user"
  
  constructor( private httpclient: HttpClient) { }

  
  authenticate(request:AuthenticationRequest):Observable<any>
  {
    
    return(this.httpclient.post<any>(this.baseUrl+"/authenticate", request));
  }
}
