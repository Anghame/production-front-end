import { Component, OnInit } from '@angular/core';
import { OrdreFabricationService } from 'src/app/ordre-fabrication.service';
import {OrdreFab} from 'src/app/Class/ordre-fab';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gestion-ordre-fab',
  templateUrl: './gestion-ordre-fab.component.html',
  styleUrls: ['./gestion-ordre-fab.component.css']
})
export class GestionOrdreFabComponent implements OnInit {
  ordreFab:Observable<OrdreFab[]>;

  constructor(private ordreFabService:OrdreFabricationService) { }
    ngOnInit(): void {
      this.reloadData();
      }
      reloadData(){
          this.ordreFab=this.ordreFabService.getAll();
      }
     delete(idOf:number){
      this.ordreFabService.delete(idOf).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));}
      
    }
   
  
