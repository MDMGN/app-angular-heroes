import { Component, OnInit } from '@angular/core';
import { PagesModule } from '../pages.module';
import { HeroesShonenService } from '../../services/heroes-shonen.service';
import { Hero } from '../../../types/hero';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-shonen',
  standalone: true,
  imports: [PagesModule],
  templateUrl: './shonen.component.html',
  styleUrl: './shonen.component.css'
})
export class ShonenComponent implements OnInit{
  public heroes:Array<Hero>= [] as Hero[]
  public loading:boolean=true;
  public search:string=''
  constructor(private httpHeroesShonen:HeroesShonenService){}
  ngOnInit(): void {
    this.httpHeroesShonen.getHeroesShonenMixed().subscribe(heroes=>{
      this.heroes=heroes.map(
        (hero)=>({
          name: hero.data.name,
          image_url:hero.data.images.jpg.image_url,
          publisher:hero.data.name_kanji
        }))
        this.loading=false;
    })
  }
  onChangeSearch(search:string){
    this.httpHeroesShonen.getSearchHeroesShonen(search)
    .subscribe(heroes=>{
      console.log(heroes)
      this.loading=true;
      this.heroes=heroes.data.map(
        (hero)=>({
          name: hero.name,
          image_url:hero.images.jpg.image_url,
          publisher:hero.name_kanji
        }))
        this.loading=false;
    },err=>{
      console.log(err)
    }
    )
  }
}
