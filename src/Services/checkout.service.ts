import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/common/Order';
import { Product } from 'src/common/Product';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  /**
   * the url to the spring boot backend rest endpoint, the spring boot rest api handles it on the backend side
   * by taking the Purchase JSON and unwrapping it into java classic object.
  */
   private purchaseUrl = 'http://localhost:8002/api/OrderDetails/checkout';
  
   constructor(private httpClient: HttpClient) { }
 
   /**
    * 
    * @param purchase a Purchase object consists of all the purchase related data
    * @returns Posting the Purchase object to the purchaseUrl leaving the rest to REST
    */
   placeOrder(order:Order): Observable<any>{
     console.log('in checkout service')
     return this.httpClient.post<Order>(this.purchaseUrl,order);
   }

  

}
