 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Client} from 'src/app/Class/client';
import  {ClientService}  from 'src/app/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
  client:  Client = new  Client();
  ajoutClientForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder , private  clientService :ClientService , private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
      this.ajoutClientForm = this.formBuilder.group({
          
    
        nomClient: ['', [Validators.required,Validators.minLength(4)]],
        pClient: ['', [Validators.required, Validators.minLength(4)]],
        emailClient: ['', [Validators.required, Validators.email]],
     
        
      }, );
  }
  get f() 
  { 
    return this.ajoutClientForm.controls; }

  onSubmit() {

    console.log("Appelle de la fonction onSubmit");
      this.submitted = true; 
   // stop here if form is invalid
   if (this.ajoutClientForm.invalid) {
    return;
}
// display form values on success
this.save();
alert('client ajouté avexc succès ! :-)\n\n' + JSON.stringify(this.ajoutClientForm.value, null, 4));
}


  onReset() {
      this.submitted = false;
      this.ajoutClientForm.reset();
  }

  
    

  
    add(): void {

console.log("Appelle de la fonction add");

      this.submitted = false;
      this.client = new Client();
      this.client.nom =this.ajoutClientForm.controls['nomClient'].value;
      this.client.prenom =this.ajoutClientForm.controls['pClient'].value;
      this.client.email =this.ajoutClientForm.controls['emailClient'].value;
  

}


save() : void {
  this.clientService.add(this.client)
    .subscribe(data => console.log(data), error => console.log(error));
  this.client= new Client();

}

goToListe()
{
this.router.navigate(['/gestionClient']);

}
}
