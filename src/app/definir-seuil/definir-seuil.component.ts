import { Component, OnInit } from '@angular/core';
import {Seuil} from 'src/app/Class/seuil';
import  {SeuilService}  from 'src/app/seuil.service';

@Component({
  selector: 'app-definir-seuil',
  templateUrl: './definir-seuil.component.html',
  styleUrls: ['./definir-seuil.component.css']
})
export class DefinirSeuilComponent implements OnInit {
  seuil:  Seuil = new  Seuil();
  submitted = false;

  constructor(private  seuilService :SeuilService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.save();


}
add(): void {
  this.submitted = false;
  this.seuil = new Seuil();
}

save() {
  this.seuilService.add(this.seuil)
    .subscribe(data => console.log(data), error => console.log(error));
  this.seuil= new Seuil();
}

}
