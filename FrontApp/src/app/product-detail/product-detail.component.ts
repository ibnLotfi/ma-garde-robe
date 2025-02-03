import { Component, Input, OnInit } from '@angular/core';
import { Product, Image } from '../models/product';
import { CurrencyPipe, NgIf } from '@angular/common';
import {  Products } from '../models/db';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product!: Product;
  activeImage: string = "";
  notFoundProduct = false;
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
      this.product = Products.find(p => p.productId == this.id)!;
      this.activeImage = this.product.images[0].imageSrc;
    });
  //   console.log("hola");
  //  const id = +this.route.snapshot.paramMap.get('id')!;
   
  //  if(Products.find(p => p.productId == id)){
  //   this.product = Products.find(p => p.productId == id)!;
  //  }else{
  //   this.notFoundProduct = true;
  //  }
  //  this.activeImage = this.product.images[0].imageSrc;
  }

}
