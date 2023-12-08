import { Component, OnInit } from '@angular/core';
import { PagesModule } from '../pages.module';
import { PanelButtonModel } from '../../models/panel-button.model';
import { HeroComicsService } from '../../services/hero-comics.service';
import { HeroComic } from '../../../types/hero-comics';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [PagesModule],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent implements OnInit{
  private btnMarvel:PanelButtonModel;
  private btnDC:PanelButtonModel;
  public btns:PanelButtonModel[];
  public heroes:HeroComic[]=[] as Array<HeroComic>;

  constructor(private httpHeroes:HeroComicsService){
    this.btnMarvel=new PanelButtonModel("marvel","#ff0000","comics/marvel")
    this.btnDC=new PanelButtonModel("dc","#0000ff","comics/dc");
    this.btns=[this.btnDC,this.btnMarvel];
  }
  ngOnInit(): void {
      this.httpHeroes.getHeroesByPages()
                      .subscribe(heroes=>this.heroes=heroes);
  }
}
