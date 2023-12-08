import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroRestService {
  constructor(private http:HttpClient) {}

  private pages:number=5;
  private currentPages:number=1;
  private currentHeroes:number=this.pages;

  getHeroes(){
    const hrArr:number[]=Array.from(Array(732));
    return hrArr.map((_:number,index:number)=>index+1);
  }

  getHeoresOption(){
    const arrSelectedHeroes=this.getHeroes()
                                .slice(this.currentPages-1,this.currentHeroes);
    this.currentPages+=this.pages;
    this.currentHeroes+=this.pages;
    return arrSelectedHeroes;
  }

  getHeroesByPages(){
    const selectedHeroes:number[]=this.getHeoresOption();
   const  [a,b,c,d,e]:number[]=selectedHeroes;
    return forkJoin(
      [
        this.http.get(`https://www.superheroapi.com/api.php/5951652661611246/${a}`),
        this.http.get(`https://www.superheroapi.com/api.php/5951652661611246/${b}`),
        this.http.get(`https://www.superheroapi.com/api.php/5951652661611246/${c}`),
        this.http.get(`https://www.superheroapi.com/api.php/5951652661611246/${d}`),
        this.http.get(`https://www.superheroapi.com/api.php/5951652661611246/${e}`)
      ]
    )
  
  }
  getHeroesByID(id:number){
      return this.http.get(`https://www.superheroapi.com/api.php/5951652661611246/${id}`);
  }
  
  getHeroesPublisherByID(id:number){
    return this.http.get(`https://www.superheroapi.com/api.php/5951652661611246/${id}/biography/publisher`);
}
}
