import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DcComponent } from './dc/dc.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DcComponent,
    HeroesComponent
  ],
  exports:[]
})
export class PagesModule { }