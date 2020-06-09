import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/utilisateur.service';
import {User} from 'src/app/Class/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {
  //user:Observable<User[]>;

  constructor(private userService:UtilisateurService) { }

  ngOnInit(): void {}
}
    /*
    this.reloadData();
    }
    reloadData(){
        this.user=this.userService.getAll();
    }
   delete(idUser:number){
    this.userService.delete(idUser).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));}
    
  }*/
 


