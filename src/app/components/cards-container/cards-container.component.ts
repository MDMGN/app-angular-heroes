import { Component, Input } from '@angular/core';
import { HeroComic } from '../../../types/hero-comics';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
@Input() heroes:HeroComic[]=[] as Array<HeroComic>
}
