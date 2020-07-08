import { Component, OnInit } from '@angular/core';
import {Seuil} from 'src/app/Class/seuil';
import  {SeuilService}  from 'src/app/seuil.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-consulter-seuil',
  templateUrl: './consulter-seuil.component.html',
  styleUrls: ['./consulter-seuil.component.css']
})
export class ConsulterSeuilComponent implements OnInit {
  seuil:Observable<Seuil[]>;

  constructor(private  seuilService :SeuilService) { }
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.seuil=this.seuilService.getAll();
}


}
