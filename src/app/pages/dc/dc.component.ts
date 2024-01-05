import { Component, OnInit } from '@angular/core';
import { HeroComicsService } from '../../services/hero-comics.service';

@Component({
  selector: 'app-dc',
  standalone: true,
  imports: [],
  templateUrl: './dc.component.html',
  styleUrl: './dc.component.css'
})
export class DcComponent implements OnInit{

  constructor(private httpHeroes:HeroComicsService){}
  ngOnInit(): void {
    this.httpHeroes.getHeroesByPages().subscribe()
  }

}
