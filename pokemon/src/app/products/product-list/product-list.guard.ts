import { Product } from './../../models/product/product';
import { ProductService } from '../../services/product.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductListGuard implements CanActivate {
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  private products: Product[];

  canActivate(): boolean {
    this.productService.getProductList().then((products) => this.products = products);
    if (this.products.length == 0) {
      alert('Product list is empty');
      this.router.navigate(['/pokemons']);
      return false;
    }
    return true;
  }
}
