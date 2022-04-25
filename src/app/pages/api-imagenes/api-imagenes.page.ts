import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-api-imagenes',
  templateUrl: './api-imagenes.page.html',
  styleUrls: ['./api-imagenes.page.scss'],
})
export class ApiImagenesPage implements OnInit {

  constructor(public dataServices:DataService) { }
  
  arrayfoto:any;

  ngOnInit() {
    this.getfoto();
  }

  getfoto(){
    this.dataServices.foto()
    .subscribe(data => {
      this.arrayfoto = data;
      //console.log(this.arrayfoto);
    });
  }

  functionName(){
    this.getfoto();
  }



}
