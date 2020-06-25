import { Component, OnInit } from '@angular/core';
//import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home-em',
  templateUrl: './home-em.component.html',
  styleUrls: ['./home-em.component.css']
})
export class HomeEmComponent implements OnInit {
  content = '';

  constructor() { } //private userService: UserService

  ngOnInit() {
    /*
    this.userService.getEmployeBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    ); */
  }

}
