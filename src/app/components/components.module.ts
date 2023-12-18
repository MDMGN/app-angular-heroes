import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { PanelButtonComponent } from './panel-button/panel-button.component';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgFor,
    NgClass,
    PanelButtonComponent,
    CardComponent,
    LoaderComponent,
  ],
  exports:[
    NgFor,
    NgClass,
    PanelButtonComponent,
    CardComponent,
    LoaderComponent,
  ]
})
export class ComponentsModule { }
