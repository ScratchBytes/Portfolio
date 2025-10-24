import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Home-page', pathMatch: 'full'},
    {path: 'Home-page', component: MainPageComponent},
];
