import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//a modifier avec le path precie en back
const API_URL = 'https://back-end-sp.herokuapp.com/api/auth/'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getEmployeBoard(): Observable<any> {
    return this.http.get(API_URL + 'employe', { responseType: 'text' });
  }

  getResponsableProdBoard(): Observable<any> {
    return this.http.get(API_URL + 'responsableProd', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
}
}