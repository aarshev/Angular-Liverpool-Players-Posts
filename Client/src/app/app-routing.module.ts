
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './features/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
},
{
    path: 'home',
    component: HomePageComponent
},
{
    path: '**',
    component: PageNotFoundComponent
}
];

export const AppRoutingModule = RouterModule.forRoot(routes);