import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class User {
  constructor(
    public id : BigInteger,
    public nom : String,
    public prenom : String, 
    public dateNaissance : String,
    public dateIscription : String,
    public username : String,
    public password : String ,
    public role : String ,
    public email : String,
    public cin : String 
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient:HttpClient
  ) { }
}
