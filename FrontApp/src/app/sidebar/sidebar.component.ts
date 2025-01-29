import { Component, Input, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import {
  Color,
  Product,
} from '../models/product';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [SliderComponent, NgStyle],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  
  @Input() products!: Product[];

  categories: string[] = [];
  brands: string[] = [];
  sizes: string[] = [];
  materials: string[] = [];
  colors: Color[] = [];

  ngOnInit(): void {
    this.initFilters();
    console.log(this.brands);
    console.log(this.categories);
    console.log(this.sizes);
    console.log(this.colors);
  }

  initFilters() {
    this.getCategories();
    this.getBrands();
    this.getSizes();
    this.getMaterials();
    this.getColors();
  }


getCategories() {
  const result = this.products.map((prod) => prod.category.name);
  this.categories = Array.from(new Set(result));
}

getBrands() {
  let filteredProducts = this.products.filter(p => p.brand != null)
  let filteredBrands = filteredProducts.map((p) => p.brand!.name)
  this.brands = Array.from(new Set(filteredBrands));
}

getSizes() {
  let filteredProducts = this.products.filter(p => p.size != null)
  let filteredSize = filteredProducts.map((p) => p.size!.name)
  this.sizes = Array.from(new Set(filteredSize));
}

getMaterials() {
  let filteredProducts = this.products.filter(p => p.material != null)
  let filteredMaterials = filteredProducts.map((p) => p.material!.name)
  this.materials = Array.from(new Set(filteredMaterials));
}

getColors() {
  let filteredProducts = this.products.filter(p => p.color != null)
  let filteredColors = filteredProducts.map((p) => p.color!)
  this.colors = Array.from(new Set(filteredColors));
}

}