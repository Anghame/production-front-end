import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ApiServiceService } from 'src/app/api-service.service';
@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.css']
})
export class TableauBordComponent implements OnInit {

  canvas: any;
  ctx: any;
data = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {


    this.apiService.get().subscribe((data: any[])=>{
      this.data = data;
 

let l = [];
let l2 = [];
    for (var val of this.data) {
    console.log(val['qantiteFabrique']);
  l.push(val['idProduit']);
    l2.push(val['qantiteFabrique']);
}

 console.log(l);



    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: l,
          datasets: [{
              label: 'Total Product.',
              data: l2,
              backgroundColor: ["red", , , , , , , , "orange"],
              borderWidth: 1
          }]
      },
      options: {
    legend: {
        display: false
    },
        responsive: false,
       //display: true
      }
    });
  
  
     }) 
  }

}
