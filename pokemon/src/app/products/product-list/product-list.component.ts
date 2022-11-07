import { CreateProductService } from './../../services/create-product.service';
import { Product } from './../../models/product/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  protected products: Product[];

  constructor(private productService: CreateProductService) {}

  ngOnInit() {
    this.productService
      .getProductList()
      .then((product) => (this.products = product));
  }
}
