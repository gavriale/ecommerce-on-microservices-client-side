import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Order } from 'src/common/Order';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  getProductsUrl = 'http://localhost:8002/api/orderDetails/'

  constructor(private httpClient: HttpClient, private accountService: AccountService) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.getProductsUrl + this.accountService.getUserName()).pipe(
      map(response => response)
    );
  }

}
