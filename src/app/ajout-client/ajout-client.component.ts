import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  ajoutClientForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.ajoutClientForm = this.formBuilder.group({
          
        idClient: ['', [Validators.required,Validators.minLength(6)]],
        nomClient: ['', [Validators.required,Validators.minLength(6)]],
        pClient: ['', [Validators.required, Validators.minLength(6)]],
        emailClient: ['', [Validators.required, Validators.email]],
     
        
      }, );
  }
  get f() { return this.ajoutClientForm.controls; }

  onSubmit() {
      this.submitted = true;

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
}