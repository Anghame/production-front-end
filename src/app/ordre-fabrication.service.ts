import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OrdreFabricationService {
  private baseUrl = 'https://back-end-sp.herokuapp.com/suiviProd/ordreFabrication';
  

  constructor(private http: HttpClient) { }

  getId(idOf: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${idOf}`);

  }
  add(ordreFabrication: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, ordreFabrication).pipe(map(res=>{return res;}));

  }

  update(idOf: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${idOf}`, value).pipe(map(res=>{return res;}));
  }

  delete(idOf: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${idOf}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
  }
  /*delete(idClient: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${idClient}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
  }*/

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`).pipe(map(res=>{return res;}));
  }
  /*getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`).pipe(map(res=>{return res;}));
  }*/
}


