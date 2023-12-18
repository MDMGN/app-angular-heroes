import { Component, Input, Output } from '@angular/core';
import { ComponentsModule } from '../components.module';
import { Hero } from '../../../types/hero';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
@Input() heroes!:Hero[];
@Input() loading!:boolean;
}
