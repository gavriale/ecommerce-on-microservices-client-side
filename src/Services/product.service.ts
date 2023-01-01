import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


import { Product } from 'src/common/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProductsUrl = 'http://localhost:8001/api/product'
  stringifiedData: any
  
  constructor(private httpClient: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.getProductsUrl).pipe(
      map(response => response)
    );
  }

  getProductById(id: number): Observable<Product>{
     return this.httpClient.get<Product>(this.getProductsUrl + '/' + id);;
  }
}