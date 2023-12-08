import { Component, Input } from '@angular/core';
import { Hero } from '../../../types/hero';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public props:Hero={} as Hero
  
}
