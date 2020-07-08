import { Component, OnInit } from '@angular/core';
import {Produit} from 'src/app/Class/produit';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  idProduit: number;
  produit: Produit;
 updateProduitForm: FormGroup;
  submitted = false;
  produit1:Observable<Produit[]>;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private router: Router,
    private produitService: ProduitService) { }

  /*
  this.produit = new Produit();
    this.idProduit = this.route.snapshot.params['id'];
    
    this.produitService.getl(this.idProduit)
      .subscribe(data => {
        console.log(data)
        this.produit = data;
      }, error => console.log(error));
} */ngOnInit() {
    this.updateProduitForm = this.formBuilder.group({
        
      idProduit: ['', [Validators.required,Validators.minLength(6)]],
      nom: ['', [Validators.required,Validators.maxLength(20)]],
      designation: ['', [Validators.required,Validators.minLength(50)]],

  
      
    }, );
    
  }
get f() { return this.updateProduitForm.controls; }
update() {
  this.produitService.update(this.idProduit, this.produit)
    .subscribe(data => console.log(data), error => console.log(error));
  this.produit = new Produit();
  this.gotoList();
}
onSubmit() {
  this.update();    
}
gotoList() {
  this.router.navigate(['/gestionproduit']);
}
}
