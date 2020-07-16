
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/Must-match.validator';
import {  ReactiveFormsModule} from '@angular/forms'
import { CustomValidators } from 'ng4-validators';
import { UserService } from 'src/app/_services/user.service';
import {User} from 'src/app/Class/user';
import {Observable} from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {
 user:  User = new  User();
  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder ,private userService: UserService ) { //
        
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          cin: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
           userName: ['', Validators.required],
            dateNaiss: ['', [Validators.required, CustomValidators.date]],
            dateTrav: ['', [Validators.required, CustomValidators.date]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            photo: ['', Validators.required],
            role:['', Validators.required],
       
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        
    
        
        }

    

  
    

  
    signup(): void {
      console.log("Appelle de la fonction add");
      this.submitted = false;
      this.user = new User();
      this.user.cin =this.registerForm.controls['cin'].value;
      this.user.nom =this.registerForm.controls['firstName'].value;
      this.user.prenom =this.registerForm.controls['lastName'].value;
      this.user.dateNaissance =this.registerForm.controls['dateNaiss'].value;
      this.user.dateInscription =this.registerForm.controls['dateTrav'].value;
      this.user.email =this.registerForm.controls['emailClient'].value;
      this.user.username =this.registerForm.controls['userName'].value;
      this.user.password =this.registerForm.controls['password'].value;
      this.user.role =this.registerForm.controls['role'].value;
       }
    
    /*
    export class User {
    id:number;
    cin:number;
    nom:String;
    prenom:String;
    dateNaissance:Date;
    dateInscription:Date;
    email:String;
    username:String;
    password:String;

    
}
*/
   


  
    save() {
      this.userService.signup(this.user)
        .subscribe(data => console.log(data), error => console.log(error));
      this.user = new User();
    }
  
 //controle..
 
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;
      this.save();

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
