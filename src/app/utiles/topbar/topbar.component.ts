import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
/*import { UserService } from '../../_services/user.service';*/
=======
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
>>>>>>> 1d55d237ae4cde21d0d87fb838ce30a1b365c442

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  content: string;

<<<<<<< HEAD
  constructor() { } //private userService: UserService
=======
  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }
>>>>>>> 1d55d237ae4cde21d0d87fb838ce30a1b365c442

  ngOnInit() {
    /*
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    ); */
    }
    logout() {
      this.tokenStorage.signOut();
      window.location.reload();
    }
}
