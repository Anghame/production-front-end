import { Component, OnInit } from '@angular/core';


import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {

    this.apiService.get().subscribe((data: any[])=>{
      this.data = data;
    })  
  }

}
