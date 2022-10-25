import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/product/country';
import { Product } from './../models/product/product';

@Injectable({
  providedIn: 'root',
})
export class CreateProductService {
  private countriesUrl =
    'https://gist.githubusercontent.com/jim-at-jibba/25fbdb561e927eeb9376a1f49db3907e/raw/081b68a3288aa23beb21684a0ae345a805b4fe0c/euro-countries.json';

  private productUrl = 'https://localhost:7088/Product';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.productUrl, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
