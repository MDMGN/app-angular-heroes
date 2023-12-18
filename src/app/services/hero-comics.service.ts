import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HeroComic, HeroComicSearch } from '../../types/hero-comics';

@Injectable({
  providedIn: 'root'
})
export class HeroComicsService {
  constructor(private http:HttpClient) {}

  private pages:number=6;
  private currentPages:number=1;
  private currentHeroes:number=this.pages;

  getHeroes(){
    const hrArr:number[]=Array.from(Array(732));
    return hrArr.map((_:number,index:number)=>index+1);
  }

  getHeoresOptionByPages(){
    const arrSelectedHeroes=this.getHeroes().slice(this.currentPages-1,this.currentHeroes);
    this.currentPages+=this.pages;
    this.currentHeroes+=this.pages;
    return arrSelectedHeroes;
  }

  getHeroesOptionMixedByPages(){
    const arrSelectedHeroes=this.getHeroes()
                                .sort(()=> Math.random()-0.5)
                                  .slice(0,this.pages-1);
    return arrSelectedHeroes;
  }

  getHeroesByPages():Observable<HeroComic[]>{
    const selectedHeroes:number[]=this.getHeroesOptionMixedByPages();
    return forkJoin(
      selectedHeroes.map(id=>this.http.get<HeroComic>(`https://www.superheroapi.com/api.php/5951652661611246/${id}`))
    );
  }

  getHeroesByID(id:number):Observable<HeroComic>{
      return this.http.get<HeroComic>(`https://www.superheroapi.com/api.php/5951652661611246/${id}`);
  }
  
  getHeroesPublisherByID(id:number):Observable<HeroComic>{
    return this.http.get<HeroComic>(`https://www.superheroapi.com/api.php/5951652661611246/${id}/biography/publisher`);
  }

  getSearchHeroByName(name:string):Observable<HeroComicSearch>{
    return this.http.get<HeroComicSearch>(`https://www.superheroapi.com/api.php/5951652661611246/search/${name}`);
  }
}