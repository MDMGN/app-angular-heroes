import { Component, OnInit } from '@angular/core';
import { PagesModule } from '../pages.module';
import { PanelButtonModel } from '../../models/panel-button.model';
import { HeroComicsService } from '../../services/hero-comics.service';
import { Hero } from '../../../types/hero';

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
  public heroes:Hero[]=[] as Array<Hero>;
  public loading:boolean=true;

  constructor(private httpHeroes:HeroComicsService){
    this.btnMarvel=new PanelButtonModel("marvel","#ffffff","#ff0000","comics/marvel")
    this.btnDC=new PanelButtonModel("dc","#0000ff","#ffffff","comics/dc");
    this.btns=[this.btnDC,this.btnMarvel];
  }
  ngOnInit(): void {
      this.httpHeroes.getHeroesByPages()
                      .subscribe(heroes=>{
                        this.heroes=heroes.map(
                          ({name,image,biography})=>({
                            name,
                            publisher:biography.publisher,
                            image_url:image.url
                          }))
                          this.loading=false;
                      });
  }
  onChangeSearch(search:string){
    this.loading=true;
    this.httpHeroes.getSearchHeroByName(search).subscribe(heroes=>{
      if(heroes.response==="error") return;
      this.heroes=heroes.results.map(
        ({name,image,biography})=>({
          name,
          publisher:biography.publisher,
          image_url:image.url
        }))
        this.loading=false;
    })
  }
}
