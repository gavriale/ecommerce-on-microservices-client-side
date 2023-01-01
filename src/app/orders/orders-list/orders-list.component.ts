import { Component, OnInit } from '@angular/core';
import { Order } from 'src/common/Order';
import { OrderService } from 'src/Services/order.service';
import { ProductService } from 'src/Services/product.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

/**
 * OrdersList flow:
 * 1.create an Order[]
 * 2.Make an html to iterate the order[]
 * 3.subscribe to the data from the REST API.
 * 4.Make a query to the database to get order by username
 * 5.create OrderService that gets the data from REST API
 * 
 * 6.In the html put a button on each order item to cancel with a timeout after some time - 
 * The button will dissappear after some timeout.
 * 
 * 7.The cancelation has to revert the Saga.
 * 
 */


export class OrdersListComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getOrderList()
  }

  getOrderList(){
    this.orderService.getOrders().subscribe(
      data => {
        //assign the data provided by the productService.searchProducts(theKeyword) method the this data
        this.orders = data;
        
        console.log('in order list component')
        console.log(data);
        console.log(this.orders);
      }
    )
  }


}
