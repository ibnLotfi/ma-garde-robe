import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-card',
  imports: [CurrencyPipe],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css'
})
export class ShoppingCardComponent {

  @Input() product!: Product;

}
