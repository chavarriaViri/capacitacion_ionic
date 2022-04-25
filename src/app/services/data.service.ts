import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://www.freetogame.com/api/games';
  // invocation = new XMLHttpRequest();

  constructor( private http: HttpClient ) { }

  
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
              .pipe(
                delay( 1500 )
              );
  }
  
  getPosts(){
    const options = {
      headers: {
        'X-RapidAPI-Key': '2a31f17edamsh890a2f9da642bffp102ec4jsn706f2de79ac6'
      }
    };
  
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  
    return this.http.get<any[]>(url, options).toPromise();

  }

  peliculas(){

    const body = { i:'tt3896198',apikey:'2c7f3ce4'}

    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=2c7f3ce4';

    return this.http.post(url, JSON.stringify(body));
  
    
  }
  
  aviones(){
    const options = {
      headers: {
        'X-RapidAPI-Key': '2a31f17edamsh890a2f9da642bffp102ec4jsn706f2de79ac6'
      }
    };
  
    const url = 'https://aerodatabox.p.rapidapi.com/flights/KL1395/delays?number=KL1395';
  
    return this.http.get<any[]>(url, options).toPromise();
    
  }

  covid(){
    return this.http.get<any[]>('https://api.covidtracking.com/v1/us/current.json');
  }

  foto(){
    const body = { client_id:'-x21IQ3zQORswPVjaqoBoWY3UF97LhSHQM6YfBEaUUI',count:'1'}

    const url = 'https://api.unsplash.com//photos/random/?client_id=-x21IQ3zQORswPVjaqoBoWY3UF97LhSHQM6YfBEaUUI&count=1';

    return this.http.get(url);   
  } 
}




