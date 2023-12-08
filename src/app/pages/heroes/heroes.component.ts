import { Component, OnInit } from '@angular/core';
import { PagesModule } from '../pages.module';
import { PanelButtonModel } from '../../models/panel-button.model';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [PagesModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent{
  private btnMarvel:PanelButtonModel;
  private btnDC:PanelButtonModel;
  public btns:PanelButtonModel[];

  constructor(){
    this.btnMarvel=new PanelButtonModel("marvel","#ff0000","comics/marvel")
    this.btnDC=new PanelButtonModel("dc","#0000ff","comics/dc");
    this.btns=[this.btnDC,this.btnMarvel];
  }
}
