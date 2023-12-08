import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelContainerComponent } from '../components/panel-container/panel-container.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelContainerComponent
  ],
  exports:[PanelContainerComponent]
})
export class PagesModule { }