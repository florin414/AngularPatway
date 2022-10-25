import { CreateProductService } from './../../services/create-product.service';
import { Product } from './../../models/product/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent  implements OnInit {
  products: Product[] = [];

  constructor(private productService: CreateProductService){}

  ngOnInit(): void {
        this.productService.getProductList().subscribe({
          next: (product) => {
            this.products = product;
          },
        });
  }


}
