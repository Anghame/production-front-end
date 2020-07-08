import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'https://back-end-sp.herokuapp.com/suiviProd/produit';


  constructor(private http: HttpClient) { }
/* get
  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }*/

  add(produit: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, produit).pipe(map(res=>{return res;}));

  }

  update(idProduit: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update${idProduit}`, value).pipe(map(res=>{return res;}));
  }

  delete(idProduit: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete${idProduit}`, { responseType: 'text' }).pipe(map(res=>{return res;}));
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`).pipe(map(res=>{return res;}));
  }
}





