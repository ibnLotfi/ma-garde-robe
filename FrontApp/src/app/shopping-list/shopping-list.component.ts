import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ShoppingCardComponent } from "../shopping-card/shopping-card.component";
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-list',
  imports: [SidebarComponent, ShoppingCardComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }

}
