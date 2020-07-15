
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/Must-match.validator';
import {  ReactiveFormsModule} from '@angular/forms'
import { CustomValidators } from 'ng4-validators';
import { UtilisateurService } from 'src/app/utilisateur.service';
import {User} from 'src/app/Class/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {
  
  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder , ) { //private utilisateurService: UtilisateurService
        
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          cin: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateNaiss: ['', [Validators.required, CustomValidators.date]],
            dateTrav: ['', [Validators.required, CustomValidators.date]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            photo: ['', Validators.required],
       
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        
    }
    /*
    user: User = new User();

  
    

  
    saveUser(): void {
      this.submitted = false;
      this.user = new User();
    }
  
    save() {
      this.utilisateurService.saveUser(this.user)
        .subscribe(data => console.log(data), error => console.log(error));
      this.user = new User();
    }
  
    onSubmit1() {
      this.submitted = true;
      this.save();
    }
  */
 //controle..
 
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('utilisateur ajouté avexc succès ! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
   
  }
