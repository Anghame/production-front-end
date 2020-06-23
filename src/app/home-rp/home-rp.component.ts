import { Component, OnInit } from '@angular/core';
//import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home-rp',
  templateUrl: './home-rp.component.html',
  styleUrls: ['./home-rp.component.css']
})
export class HomeRPComponent implements OnInit {
  content = '';

  constructor() { } //private userService: UserService

  ngOnInit() {
    /*
    this.userService.getResponsableProdBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    ); */
  }

}
