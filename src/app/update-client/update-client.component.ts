import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Client} from 'src/app/Class/client';
import  {ClientService}  from 'src/app/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  idClient:number;
  client:  Client = new  Client();
  ajoutClientForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private  clientService :ClientService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.client= new Client ;

    
    this.ajoutClientForm = this.formBuilder.group({
          
    idClient:['', [Validators.required,Validators.minLength(4)]],
      nomClient: ['', [Validators.required,Validators.minLength(4)]],
      pClient: ['', [Validators.required, Validators.minLength(4)]],
      emailClient: ['', [Validators.required, Validators.email]],
   
      
    }, );
    
/*

    this.idClient = this.route.snapshot.params['idClient'];
    
    this.clientService.getId(this.idClient)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error)); */
  }
  get f() 
  { 
    return this.ajoutClientForm.controls; }
    onSubmit() {

      console.log("Appelle de la fonction onSubmit");
      this.update();   
        //this.save();
    }
  onReset() {
    this.submitted = false;
    this.ajoutClientForm.reset();
}
update() {
  this.clientService.update(this.idClient, this.client)
    .subscribe(data => console.log(data), error => console.log(error));
  this.client = new Client();
  this.gotoList();
}



gotoList() {
  this.router.navigate(['/gestionClient']);
}


}
