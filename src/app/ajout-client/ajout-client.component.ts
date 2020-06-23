 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Client} from 'src/app/Class/client';
import  {ClientService}  from 'src/app/client.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  ajoutClientForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder , private  clientService :ClientService ) { }

  ngOnInit() {
      this.ajoutClientForm = this.formBuilder.group({
          
    
        nomClient: ['', [Validators.required,Validators.minLength(4)]],
        pClient: ['', [Validators.required, Validators.minLength(4)]],
        emailClient: ['', [Validators.required, Validators.email]],
     
        
      }, );
  }
  get f() { return this.ajoutClientForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.save();

      // stop here if form is invalid
      if (this.ajoutClientForm.invalid) {
          return;
      }

      // display form values on success
      alert('utilisateur ajouté avexc succès ! :-)\n\n' + JSON.stringify(this.ajoutClientForm.value, null, 4));
  }


  onReset() {
      this.submitted = false;
      this.ajoutClientForm.reset();
  }
  client:  Client = new  Client();

  
    

  
    add(): void {
      this.submitted = false;
      this.client = new Client();
    }
  
    save() {
      this.clientService.add(this.client)
        .subscribe(data => console.log(data), error => console.log(error));
      this.client= new Client();
    }
  
}