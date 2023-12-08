import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelContainerComponent } from '../components/panel-container/panel-container.component';
import { CardsContainerComponent } from '../components/cards-container/cards-container.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelContainerComponent,
    CardsContainerComponent
  ],
  exports:[
    PanelContainerComponent,
    CardsContainerComponent
  ]
})
export class PagesModule { }