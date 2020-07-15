import { Component, OnInit } from '@angular/core';
import { EtapeService } from 'src/app/etape.service';
import {Etape} from 'src/app/Class/etape';
import {Observable} from 'rxjs';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { UpdateOFComponent } from '../update-of/update-of.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-etape',
  templateUrl: './gestion-etape.component.html',
  styleUrls: ['./gestion-etape.component.css']
})
export class GestionEtapeComponent implements OnInit {
  etape:Observable<Etape[]>;

  constructor(private etapeService:EtapeService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.etape=this.etapeService.getAll();
}
  delete(idEtape:number){
    this.etapeService.delete(idEtape).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));
  }
  
  update(idEtape:number)
{this.router.navigate(['/updateClient',idEtape]); }

}

