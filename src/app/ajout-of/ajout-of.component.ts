import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng4-validators';

@Component({
  selector: 'app-ajout-of',
  templateUrl: './ajout-of.component.html',
  styleUrls: ['./ajout-of.component.css']
})
export class AjoutOFComponent implements OnInit {
  ajoutOfForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.ajoutOfForm = this.formBuilder.group({
          
        idOF: ['', [Validators.required,Validators.minLength(6)]],
        idClient: ['', [Validators.required,Validators.minLength(6)]],
        idProduit: ['', [Validators.required, Validators.minLength(6)]],
        refCommande: ['', [Validators.required, Validators.minLength(6)]],
        quantite: ['', [Validators.required,Validators.maxLength(4) ]],
        dateEntre: ['', [Validators.required, CustomValidators.date]],
        dateSortie: ['', [Validators.required,CustomValidators.date]],
        
      }, );
  }
  get f() { return this.ajoutOfForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ajoutOfForm.invalid) {
          return;
      }

      // display form values on success
      alert('utilisateur ajouté avexc succès ! :-)\n\n' + JSON.stringify(this.ajoutOfForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.ajoutOfForm.reset();
  }
}
