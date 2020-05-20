import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng4-validators';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  ajoutProduitForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.ajoutProduitForm = this.formBuilder.group({
          
        idProduit: ['', [Validators.required,Validators.minLength(6)]],
        nom: ['', [Validators.required,Validators.maxLength(20)]],
        designation: ['', [Validators.required,Validators.minLength(50)]],
  
    
        
      }, );
  }
  get f() { return this.ajoutProduitForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ajoutProduitForm.invalid) {
          return;
      }

      // display form values on success
      alert('utilisateur ajouté avexc succès ! :-)\n\n' + JSON.stringify(this.ajoutProduitForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.ajoutProduitForm.reset();
  }
}
