import { Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DcComponent } from './pages/dc/dc.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {path:"comics", component:HeroesComponent},
    {path:"comics/marvel", component:MarvelComponent},
    {path:"comics/dc", component:DcComponent}
    /* 
    {path:"/", redirectTo:"heroes"},
    {path:"**", redirectTo:"heroes"} */
];
