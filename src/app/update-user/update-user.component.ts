import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/Must-match.validator';
import {  ReactiveFormsModule} from '@angular/forms'
import { CustomValidators } from 'ng4-validators';
import { UtilisateurService } from 'src/app/utilisateur.service';
import {User} from 'src/app/Class/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

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
   
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }
    get f() { return this.registerForm.controls; }    


}
