import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import {Client} from 'src/app/Class/client';
import {Observable} from 'rxjs';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { UpdateOFComponent } from '../update-of/update-of.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {
  client:Observable<Client[]>;
  constructor(private clientService:ClientService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.client=this.clientService.getAll();
}
  delete(idClient:number){
    this.clientService.delete(idClient).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));
  }
  
  update(idClient:number)
{this.router.navigate(['/updateClient',idClient]); }

}


