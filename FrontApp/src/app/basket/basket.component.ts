import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-basket',
  imports: [CurrencyPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {

  subtotal = 15;
  articlesCount = 3;

}
