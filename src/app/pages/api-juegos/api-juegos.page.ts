import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-api-juegos',
  templateUrl: './api-juegos.page.html',
  styleUrls: ['./api-juegos.page.scss'],
})
export class ApiJuegosPage implements OnInit {

  games: any[] = [];
  arrayPosts:any;
  
  constructor(
    public dataServices:DataService
  ) { }

  ngOnInit() {
    // this.dataServices.getGames().subscribe( games => {
    //       this.games = games;
    //     });

    this.getPosts();
    
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.dataServices.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }
}
