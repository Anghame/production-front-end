import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng4-validators';
import { OrdreFabricationService } from 'src/app/ordre-fabrication.service';
import {OrdreFab} from 'src/app/Class/ordre-fab'; 
import {Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-of',
  templateUrl: './ajout-of.component.html',
  styleUrls: ['./ajout-of.component.css']
})
export class AjoutOFComponent implements OnInit {
  ordreFabrication :  OrdreFab = new  OrdreFab();
  ajoutOfForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder ,private ordreFabService:OrdreFabricationService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
      this.ajoutOfForm = this.formBuilder.group({
          
        idOF: ['', [Validators.required,Validators.minLength(6)]],
        idClient: ['', [Validators.required,Validators.minLength(6)]],
        idProduit: ['', [Validators.required, Validators.minLength(6)]],
        quantite: ['', [Validators.required,Validators.maxLength(4) ]],
        dateEntre: ['', [Validators.required, ]],// CustomValidators.date
        dateSortie: ['', [Validators.required,]],//CustomValidators.date
        
      }, );
  }
  get f() { return this.ajoutOfForm.controls; }

  onSubmit() {
    console.log("Appelle de la fonction onSubmit");
    this.submitted = true; 
      // stop here if form is invalid
      if (this.ajoutOfForm.invalid) {
          return;
      }
      this.save();
      // display form values on success
      alert('ordre de fabrication  ajouté avec succès ! :-)\n\n' + JSON.stringify(this.ajoutOfForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.ajoutOfForm.reset();
  }
  //service 
  
  
    

  
    add(): void {
      console.log("Appelle de la fonction add");

      this.submitted = false;
      this.ordreFabrication = new OrdreFab();
      this.ordreFabrication.idOf =this.ajoutOfForm.controls['idOF'].value;
      this.ordreFabrication.idClient =this.ajoutOfForm.controls['idClient'].value;
      this.ordreFabrication.idProduit =this.ajoutOfForm.controls['idProduit'].value;
      this.ordreFabrication.quantite =this.ajoutOfForm.controls['quantite'].value;
      this.ordreFabrication.dateEntree =this.ajoutOfForm.controls['dateEntre'].value;
      this.ordreFabrication.dateSortie =this.ajoutOfForm.controls['dateSortie'].value;
      
    }
  
    save() : void {
      this.ordreFabService.add(this.ordreFabrication)
        .subscribe(data => console.log(data), error => console.log(error));
      this.ordreFabrication= new OrdreFab();
      //this.goToListe();
    }
    goToListe()
{
this.router.navigate(['/gestionOf']);

}
  
  
}
