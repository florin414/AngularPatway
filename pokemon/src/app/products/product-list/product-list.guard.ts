import { CreateProductService } from './../../services/create-product.service';
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductListGuard implements CanActivate{
  products: Product[];
  constructor(
    private productService: CreateProductService,
    private router: Router
  ) {}

  async canActivate(){
    this.products = await this.productService.getProductList();
    if (this.products.length==0) {
      alert('Product list is empty');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
