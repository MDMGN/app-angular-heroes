import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Amazing Heroes';
  count:number = 0;

  constructor(){}

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
