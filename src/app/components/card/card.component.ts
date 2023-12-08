import { Component, Input } from '@angular/core';
import { HeroComic } from '../../../types/hero-comics';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public props:HeroComic={} as HeroComic
  
}
