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

  canActivate(): boolean {
    let lenghtProductList;
    this.productService.getProductList().then((products) => lenghtProductList = products.length);
    if (lenghtProductList == 0) {
      alert('Product list is empty');
      this.router.navigate(['/pokemons']);
      return false;
    }
    return true;
  }
}
