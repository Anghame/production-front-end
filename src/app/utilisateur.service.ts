import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseUrl = '/suiviProd/utilisateur';

  constructor(private http: HttpClient) { }
/* get
  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }*/

  saveUser(utilisateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, utilisateur).pipe(map(res=>{return res;}));

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