import { ProductService } from '../../services/product.service';
import { Product } from './../../models/product/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductList()
      .then((product) => (this.products = product));
  }
}
