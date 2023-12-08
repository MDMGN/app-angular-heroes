import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PanelButtonComponent } from './panel-button/panel-button.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgFor,
    PanelButtonComponent,
    CardComponent
  ],
  exports:[
    NgFor,
    PanelButtonComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
