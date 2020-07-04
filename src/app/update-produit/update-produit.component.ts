import { Component, OnInit } from '@angular/core';
import {Produit} from 'src/app/Class/produit';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  ajoutProduitForm: FormGroup;
  submitted = false;
  produit:Observable<Produit[]>;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ajoutProduitForm = this.formBuilder.group({
        
      idProduit: ['', [Validators.required,Validators.minLength(6)]],
      nom: ['', [Validators.required,Validators.maxLength(20)]],
      designation: ['', [Validators.required,Validators.minLength(50)]],

  
      
    }, );
}
get f() { return this.ajoutProduitForm.controls; }

}
