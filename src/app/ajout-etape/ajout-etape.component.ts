
 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Etape} from 'src/app/Class/etape';
import  {EtapeService}  from 'src/app/etape.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-etape',
  templateUrl: './ajout-etape.component.html',
  styleUrls: ['./ajout-etape.component.css']
})
export class AjoutEtapeComponent implements OnInit {
  etape:  Etape = new  Etape();
  ajoutEtapeForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder , private  etapeService :EtapeService , private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
      this.ajoutEtapeForm = this.formBuilder.group({
          
    
        numEtape: ['', [Validators.required,Validators.minLength(1)]],
        nomEtape: ['', [Validators.required, ]],
        
      }, );
  }
  get f() 
  { 
    return this.ajoutEtapeForm.controls; }

  onSubmit() {

    console.log("Appelle de la fonction onSubmit");
      this.submitted = true;
      this.save();

      // stop here if form is invalid
     // if (this.ajoutClientForm.invalid) {
       //   return;
      //}

      // display form values on success
     // alert('utilisateur ajouté avexc succès ! :-)\n\n' +
     // JSON.stringify(this.ajoutClientForm.value, null, 4));
  }


  onReset() {
      this.submitted = false;
      this.ajoutEtapeForm.reset();
  }
  

  
    

  
    add(): void {

console.log("Appelle de la fonction add");

      this.submitted = false;
      this.etape = new Etape();
      this.etape.nomEtape =this.ajoutEtapeForm.controls['nomEtape'].value;
      this.etape.numEtape=this.ajoutEtapeForm.controls['numEtape'].value;
     
}


save() : void {
  this.etapeService.add(this.etape)
   .subscribe(data => console.log(data), error => console.log(error));
  this.etape= new Etape();
this.goToListe;
}

goToListe()
{
this.router.navigate(['/gestionClient']);

}
}
