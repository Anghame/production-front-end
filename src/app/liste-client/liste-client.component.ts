import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import {Client} from 'src/app/Class/client';
import {Observable} from 'rxjs';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { UpdateOFComponent } from '../update-of/update-of.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

  client:Observable<Client[]>;
  constructor(private clientService:ClientService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.client=this.clientService.getAll();
}


}


