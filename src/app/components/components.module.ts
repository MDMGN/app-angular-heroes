import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PanelButtonComponent } from './panel-button/panel-button.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgFor,
    PanelButtonComponent
  ],
  exports:[
    NgFor,
    PanelButtonComponent
  ]
})
export class ComponentsModule { }
