import { Routes } from '@angular/router';
import { DcComponent } from './pages/dc/dc.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { authGuard } from './services/auth.guard';
import { ComicsComponent } from './pages/comics/comics.component';

export const routes: Routes = [
    {path:"comics", component:ComicsComponent},
    {path:"comics/marvel", component:MarvelComponent},
    {path:"comics/dc", component:DcComponent}
    /* 
    {path:"/", redirectTo:"heroes"},
    {path:"**", redirectTo:"heroes"} */
];
