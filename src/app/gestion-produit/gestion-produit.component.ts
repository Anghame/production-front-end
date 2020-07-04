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
/*
     <tbody>
                             
                                 
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div class="fixed-table-toolbar">
                                            <div class="bs-bars pull-left">
                                                <div class="toolbar">
                                                
                                                    <button class="btn btn-default" id="modBtn">  <h6 [ngStyle]="{color:'white' }"> <b>Modifier</b></h6></button>
                                                    <button class="btn btn-default" id="suppBtn"> <h6 [ngStyle]="{color:'white' }"> <b>Supprimer</b> </h6></button>
                                                </div>
                                            </div>
                                           
                                    
                                        </div>
                                    </td>
                                         
                                </tr>
                                 
                             </tbody>
 */