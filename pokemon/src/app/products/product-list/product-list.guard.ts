import { CreateProductService } from './../../services/create-product.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductListGuard implements CanActivate {
  constructor(
    private productService: CreateProductService,
    private router: Router
  ) {}

  async canActivate() {
    let products = await this.productService.getProductList();
    if (products.length == 0) {
      alert('Product list is empty');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
