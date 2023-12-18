import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelContainerComponent } from '../components/panel-container/panel-container.component';
import { CardsContainerComponent } from '../components/cards-container/cards-container.component';
import { SearchComponent } from '../components/search/search.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelContainerComponent,
    CardsContainerComponent,
    SearchComponent
  ],
  exports:[
    PanelContainerComponent,
    CardsContainerComponent,
    SearchComponent
  ]
})
export class PagesModule { }