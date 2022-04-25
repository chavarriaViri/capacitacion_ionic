import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-api-covid',
  templateUrl: './api-covid.page.html',
  styleUrls: ['./api-covid.page.scss'],
})
export class ApiCovidPage implements OnInit {

  constructor(public dataServices:DataService) { }
  arrayPosts:any;
  arrayfoto:any;
  ngOnInit() {
    this.getPosts();
    this.getfoto();
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.dataServices.covid()
    .subscribe(data => {
      this.arrayPosts = data;
      console.log(this.arrayPosts);
    });
  }

  getfoto(){
    this.dataServices.foto()
    .subscribe(data => {
      this.arrayfoto = data;
      console.log(this.arrayfoto);
    });
  }

}
