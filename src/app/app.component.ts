import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeroRestService } from './services/hero.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'app-angular';
  count:number = 0;

  constructor(private heroes:HeroRestService){}
  ngOnInit(): void {
    this.heroes.getHeroesByPages().subscribe(console.log)
  }

  addCounter(){
    this.count++;
  }

  updateCounter(value:number){
    console.log(value)
    this.count=value;
  }

  subCounter(){
    if(this.count !== 0) this.count--;
  }

  resetCounter(value:number){
      this.count=value;
  }
}
