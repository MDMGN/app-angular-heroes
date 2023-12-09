import { Component, OnInit } from '@angular/core';
import { PagesModule } from '../pages.module';
import { HeroesShonenService } from '../../services/heroes-shonen.service';
import { Hero } from '../../../types/hero';

@Component({
  selector: 'app-shonen',
  standalone: true,
  imports: [PagesModule],
  templateUrl: './shonen.component.html',
  styleUrl: './shonen.component.css'
})
export class ShonenComponent implements OnInit{
  public heroes:Array<Hero>= [] as Hero[]
  constructor(private httHeroesShonen:HeroesShonenService){}
  ngOnInit(): void {
    this.httHeroesShonen.getHeroesShonenMixed().subscribe(heroes=>this.heroes=heroes.map(
              (hero)=>({
                name: hero.data.name,
                image_url:hero.data.images.jpg.image_url,
                publisher:hero.data.name_kanji
              })
    ))
  }

}
