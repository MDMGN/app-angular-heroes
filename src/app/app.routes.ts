import { Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DcComponent } from './pages/dc/dc.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {path:"heroes", component:HeroesComponent},
    {path:"heroes/marvel", component:MarvelComponent},
    {path:"heroes/dc", component:DcComponent}
    /* 
    {path:"/", redirectTo:"heroes"},
    {path:"**", redirectTo:"heroes"} */
];
