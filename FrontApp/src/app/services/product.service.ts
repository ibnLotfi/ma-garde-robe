import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Products } from '../models/db'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = Products;

  // constructor(private httpClient: HttpClient) { }

  getProduct(){
    return this.products;
  }
}
