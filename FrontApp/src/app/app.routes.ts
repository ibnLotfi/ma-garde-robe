import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BasketComponent } from './basket/basket.component';

export const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
    data: { 'title': 'Home'}
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'men',
    component : ShoppingListComponent,
    data: { 'title': 'Men'}
  },
  {
    path: 'women',
    component : ShoppingListComponent,
    data: { 'title': 'Women'}
  },
  {
    path: 'kids',
    component : ShoppingListComponent,
    data: { 'title': 'Kids'}
  },
  {
    path: 'accessory',
    component : ShoppingListComponent,
    data: { 'title': 'Accessory'}
  },
];
