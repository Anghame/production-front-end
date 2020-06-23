import { Component, OnInit } from '@angular/core';
//import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*
  title="FProjet";
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showResponsableProdBoard = false;
  username: string;
*/
  constructor() { } //private tokenStorageService: TokenStorageService

  ngOnInit() {
    /*
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles; 

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showResponsableProdBoard = this.roles.includes('ROLE_RESPONSABLEPROD');

      this.username = user.username;
    } */
  }
<<<<<<< HEAD
/*
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  } */
=======

  
>>>>>>> 1d55d237ae4cde21d0d87fb838ce30a1b365c442
}
