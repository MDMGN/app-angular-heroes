import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroRestService {
  constructor(private rest:HttpClient) {}

  getHeroesByID(id:number){
      return this.rest.get(`https://www.superheroapi.com/api.php/5951652661611246/${id}`);
  }
  getHeroesPublisherByID(id:number){
    return this.rest.get(`https://www.superheroapi.com/api.php/5951652661611246/${id}/biography/publisher`);
}
}
