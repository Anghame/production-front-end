import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  username:string;
  content: string;

  constructor(private userService: UserService,private tokenStorage:TokenStorageService) { } //

  ngOnInit() {
    this.username = this.tokenStorage.getUser().username;

    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    }
    logout(){
      this.tokenStorage.signOut();
      window.location.reload();

    }
    onSubmit()
    {
     username : this.tokenStorage.getUser().username;
    }
}
