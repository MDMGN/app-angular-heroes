import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HeroShonen } from '../../types/heroe-shonen';

@Injectable({
  providedIn: 'root'
})
export class HeroesShonenService {
  private pages:number=6;
  constructor(private http:HttpClient) { }

  getHeroesShonenMixed():Observable<HeroShonen[]>{
      const arrHeroes=Array.from(Array(this.pages));
      return forkJoin(arrHeroes.map(_=>this.http.get<HeroShonen>('https://api.jikan.moe/v4/random/characters')))
  }

  getSearchHeroesShonen(name:string):Observable<HeroShonen[]>{
    return this.http.get<HeroShonen[]>(`https://api.jikan.moe/v4/characters?q=${name}`)
}
  
}
