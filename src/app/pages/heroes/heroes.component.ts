import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(private router:Router){}

  navigateToDC(){
    this.router.navigate(['heroes/dc']);
  }

  navigateToMarvel(){
    this.router.navigate(['heroes/marvel']);
  }
}
