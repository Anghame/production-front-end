import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
export class User{
  constructor(
    public status:string,
     ) {}
}
export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(
    private httpClient:HttpClient
  ) { 
     }
     authenticate(username, password) {
      console.log(username);
      console.log(password);
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
         }
       )
      );
    }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}