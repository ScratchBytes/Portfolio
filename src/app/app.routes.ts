import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TestComponentComponent } from './test-component/test-component.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Home-page', pathMatch: 'full'},
    {path: 'Home-page', component: MainPageComponent},
    { path: '**', redirectTo: 'Page-Not-Found' },
    // {path: 'Page-Not-Found',
    //     loadComponent: () =>
    //     import('./not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
    // },
    {path: 'UnderTest', component: TestComponentComponent}
];
