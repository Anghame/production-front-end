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
/* get
  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }*/

  add(utilisateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, utilisateur).pipe(map(res=>{return res;}));

  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update${id}`, value).pipe(map(res=>{return res;}));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete${id}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`).pipe(map(res=>{return res;}));
  }
}


