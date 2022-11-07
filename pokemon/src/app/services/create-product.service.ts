import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from './../models/product/product';
import { Category } from '../models/product/category';
import { Select } from '../models/product/select';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateProductService {
  private productUrl = environment.productUrl;
  private product: Product = new Product();

  constructor(private http: HttpClient) {}

  async getProductList() {
    return await firstValueFrom(this.http.get<Product[]>(this.productUrl));
  }

  async addProduct(product: Product): Promise<Product> {
    this.product.category = Category.Blankets;
    this.product.description = 'dsad';
    this.product.imageUrl =
      'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg';
    this.product.name = 'test';
    this.product.phone = 232;
    this.product.price = 434;
    this.product.select = Select.LandLine;

    return await firstValueFrom(this.http
      .post<Product>(this.productUrl, this.product));
  }
}
