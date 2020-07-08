import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SeuilService {
  private baseUrl = 'https://back-end-sp.herokuapp.com/suiviProd/seuilProduction'

  constructor(private http: HttpClient) { }
  
  add(seuil: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, seuil).pipe(map(res=>{return res;}));

  }

  update(idSeuil: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update${idSeuil}`, value).pipe(map(res=>{return res;}));
  }

  delete(idSeuil: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete${idSeuil}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`).pipe(map(res=>{return res;}));
  }
}

