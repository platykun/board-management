import {AppComponent} from './app.component';
import {Routes} from '@angular/router';
import {TopComponent} from './top/top.component';
import {HomeComponent} from './top/home/home.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'top', component: TopComponent},
  { path: 'home', component: HomeComponent},
  { path: 'browse', loadChildren: './browse/browse.module#BrowseModule'},
  { path: '**', loadChildren: './browse/browse.module#BrowseModule' }
];
