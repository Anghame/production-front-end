import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import {User} from 'src/app/Class/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {
user:Observable<User[]>

  constructor(private userService:UserService) { }

 
  ngOnInit(): void {
    this.reloadData();
    
  }
  

    reloadData(){
        this.user=this.userService.getAll();
    }
   delete(id:number){
    this.userService.delete(id).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));}
   
}


