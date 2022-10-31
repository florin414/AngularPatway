import { CreateProductService } from './../../services/create-product.service';
import { Product } from './../../models/product/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: CreateProductService) {}

  async ngOnInit(){
    this.products = await this.productService.getProductList().then();
  }
}
