

  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import {map} from 'rxjs/operators'
  
  @Injectable({
    providedIn: 'root'
  })
  export class EtapeService {
    private baseUrl = 'https://back-end-sp.herokuapp.com/suiviProd/etape';
  
    constructor(private http: HttpClient) { }
  
    getId(idEtape: number): Observable<Object> {
      return this.http.get(`${this.baseUrl}/get/${idEtape}`);
    }
  
    add(etape: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}/add`,etape).pipe(map(res=>{return res;}));
  
    }
  
    updateId(idEtape: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/update/${idEtape}`, value).pipe(map(res=>{return res;}));
    }
  
    delete(idEtape: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete/${idEtape}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
    }
  
    getAll(): Observable<any> {
      return this.http.get(`${this.baseUrl}/getAll`).pipe(map(res=>{return res;}));
    }
  }
  
  
  
  
  
  
    