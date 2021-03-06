import { Component, OnInit } from '@angular/core';
import {Produit} from 'src/app/Class/produit';
import {Observable} from 'rxjs';
import {ProduitService} from 'src/app/produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {
  produit:Observable<Produit[]>;

  constructor( private produitService: ProduitService) { }

  ngOnInit(): void {
    this.reloadData();
    
  }
  

    reloadData(){
        this.produit=this.produitService.getAll();
    }
   delete(idProduit:number){
    this.produitService.delete(idProduit).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));}
   
}
