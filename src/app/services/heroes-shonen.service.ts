import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HeroeShonen } from '../../types/heroes-shonen';

@Injectable({
  providedIn: 'root'
})
export class HeroesShonenService {
  private pages:number=6;
  constructor(private http:HttpClient) { }

  getHeroesShonenMixed():Observable<HeroeShonen[]>{
      const arrHeroes=Array.from(Array(this.pages));
      return forkJoin(arrHeroes.map(_=>this.http.get<HeroeShonen>('https://api.jikan.moe/v4/random/characters')))
  }

  getSearchHeroesShonen(name:string):Observable<HeroeShonen[]>{
    return this.http.get<HeroeShonen[]>(`https://api.jikan.moe/v4/characters?q=${name}`)
}
  
}
