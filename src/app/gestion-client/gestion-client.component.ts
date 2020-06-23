import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import {Client} from 'src/app/Class/client';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {
  client:Observable<Client[]>;
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.client=this.clientService.getAll();
}
  delete(idOf:number){
    this.clientService.delete(idOf).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));}
}

