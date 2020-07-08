

  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'https://back-end-sp.herokuapp.com/suiviProd/client';

  constructor(private http: HttpClient) { }
/* get
  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }*/

  add(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, client).pipe(map(res=>{return res;}));

  }

  update(idClient: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update${idClient}`, value).pipe(map(res=>{return res;}));
  }

  delete(idClient: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete${idClient}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`).pipe(map(res=>{return res;}));
  }
}






  