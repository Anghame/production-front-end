import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng4-validators';
import { OrdreFabricationService } from 'src/app/ordre-fabrication.service';
import {OrdreFab} from 'src/app/Class/ordre-fab'; 
import {Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-of',
  templateUrl: './update-of.component.html',
  styleUrls: ['./update-of.component.css']
})
export class UpdateOFComponent implements OnInit {
idOf:number;
  ajoutOfForm: FormGroup;
  ordreFab:OrdreFab;
  submitted = false;
  ordreFab1:Observable<OrdreFab[]>;
  constructor(private formBuilder: FormBuilder ,private ordreFabService:OrdreFabricationService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
      this.ajoutOfForm = this.formBuilder.group({
          
        idOF: ['', [Validators.required,Validators.minLength(6)]],
        idClient: ['', [Validators.required,Validators.minLength(6)]],
        idProduit: ['', [Validators.required, Validators.minLength(6)]],
        refCommande: ['', [Validators.required, Validators.minLength(6)]],
        quantite: ['', [Validators.required,Validators.maxLength(4) ]],
        dateEntre: ['', [Validators.required, CustomValidators.date]],
        dateSortie: ['', [Validators.required,CustomValidators.date]],
        
      }, );
  }
  get f() { return this.ajoutOfForm.controls; }
  update() {
    this.ordreFabService.update(this.idOf, this.ordreFab)
      .subscribe(data => console.log(data), error => console.log(error));
    this.ordreFab = new OrdreFab();
    this.gotoList();
  }
  onSubmit() {
    this.update();    
  }
  gotoList() {
    this.router.navigate(['/gestionproduit']);
  }

}
