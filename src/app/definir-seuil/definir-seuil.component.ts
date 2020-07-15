import { Component, OnInit } from '@angular/core';
import {Seuil} from 'src/app/Class/seuil';
import  {SeuilService}  from 'src/app/seuil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-definir-seuil',
  templateUrl: './definir-seuil.component.html',
  styleUrls: ['./definir-seuil.component.css']
})
export class DefinirSeuilComponent implements OnInit {
  seuil:  Seuil = new  Seuil();
  submitted = false;
  ajoutSeuilForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private  seuilService :SeuilService) { }

  ngOnInit(): void {
    this.ajoutSeuilForm = this.formBuilder.group({
          
    
      chiffreProduction: ['', [Validators.required,Validators.minLength(2)]],
    }, );
  }
  get f() 
  { 
    return this.ajoutSeuilForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.save();


}
onReset() {
  this.submitted = false;
  this.ajoutSeuilForm.reset();
}

add(): void {
  console.log("Appelle de la fonction add");
  this.submitted = false;
  this.seuil = new Seuil();
  this.seuil.chiffreProduction =this.ajoutSeuilForm.controls['chiffreProduction'].value;
}

save() {
  this.seuilService.add(this.seuil)
    .subscribe(data => console.log(data), error => console.log(error));
  this.seuil= new Seuil();
}

}
