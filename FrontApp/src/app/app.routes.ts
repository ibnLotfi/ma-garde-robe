import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    data: { 'title': 'Home'}
  },
  {
    path: 'TestLink',
    redirectTo: "/",
    data: { 'title': 'Men'}
  },
  {
    path: 'TestLink',
    redirectTo: "/",
    data: { 'title': 'Women'}
  },
  {
    path: 'TestLink',
    redirectTo: "/",
    data: { 'title': 'Kids'}
  },
  {
    path: 'TestLink',
    redirectTo: "/",
    data: { 'title': 'Accessory'}
  },
];
