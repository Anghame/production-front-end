import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng4-validators';
import { OrdreFabricationService } from 'src/app/ordre-fabrication.service';
import {OrdreFab} from 'src/app/Class/ordre-fab'; 
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ajout-of',
  templateUrl: './ajout-of.component.html',
  styleUrls: ['./ajout-of.component.css']
})
export class AjoutOFComponent implements OnInit {
  ajoutOfForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder ,private ordreFabService:OrdreFabricationService) { }

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
      
      this.save();

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
  //service 
  ordreFab:  OrdreFab = new  OrdreFab();

  
    

  
    add(): void {
      this.submitted = false;
      this.ordreFab = new OrdreFab();
    }
  
    save() {
      this.ordreFabService.add(this.ordreFab)
        .subscribe(data => console.log(data), error => console.log(error));
      this.ordreFab= new OrdreFab();
    }
  
  
}
