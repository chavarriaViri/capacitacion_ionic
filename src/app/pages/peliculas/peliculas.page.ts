import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  keys: string[];

  //peliculas: Observable<any>; 
  public peliculas : Observable<any>;
  usuarios: Observable<any>;
  products: any[];

  constructor(public dataServices:DataService) { }
  arrayPosts: any;
  contact: Array<Object>;
  dataValues = []; //For values

  dataKeys = []; //For keys
  
  ngOnInit() {

    //this.peliculas = this.dataServices.peliculas();
    
    this.getPosts();
    //this.peliculas = this.dataServices.peliculas();
    //console.log(this.peliculas);
  
    // this.dataServices.peliculas().subscribe((snaps) => {
    //   this.arrayPosts = snaps;
    //   console.log(this.arrayPosts)
    // });

  
  }



  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.dataServices.aviones()
    .then(data => {
      this.arrayPosts = data;
      console.log(this.arrayPosts);
    });
    // this.dataServices.peliculas()
    // .subscribe(data => {
    //   console.log(data)
    //   this.products = data;
    //   this.keys = Object.keys(this.products);
    // });
  }

}
