import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

//a modifier avec le path precie en back
const API_URL = 'https://back-end-sp.herokuapp.com/api/auth/'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://back-end-sp.herokuapp.com/suiviProd/user/';
  private baseUrl2 ='https://back-end-sp.herokuapp.com/api/';
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
signup(user: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl2}`, user).pipe(map(res=>{return res;}));

}

update(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${id}`, value).pipe(map(res=>{return res;}));
}

delete(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
}

getAll(): Observable<any> {
  return this.http.get(`${this.baseUrl}`).pipe(map(res=>{return res;}));
}
}