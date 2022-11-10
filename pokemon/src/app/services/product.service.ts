import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product/product';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = environment.productUrl;

  constructor(private http: HttpClient) {}

  public async getProductList() {
    return await firstValueFrom(this.http.get<Product[]>(this.productUrl));
  }

  public async addProduct(product: Product): Promise<Product> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return await firstValueFrom(
      this.http.post<Product>(this.productUrl, product, { headers: headers })
    );
  }
}
