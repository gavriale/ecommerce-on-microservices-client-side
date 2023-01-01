import { Component, OnInit } from '@angular/core';
import { Product } from 'src/common/Product';
import { ProductService } from 'src/Services/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { OrdersListComponent } from 'src/app/orders/orders-list/orders-list.component';
import { Order } from 'src/common/Order';
import { AccountService } from 'src/Services/account.service';
import { CheckoutService } from 'src/Services/checkout.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from 'src/app/order-dialog/order-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[];
  getProductsUrl = 'http://localhost:8001/api/product';
  cols = 1;
  rowHeight = '500px';
  handsetPortrait = false;

  constructor(private productService: ProductService, private accountService: AccountService, private http: HttpClient,
    private checkoutService: CheckoutService,private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(){
    this.productService.getProducts().subscribe(
      data => {
        //assign the data provided by the productService.searchProducts(theKeyword) method the this data
        this.products = data;
        console.log(data);
        console.log(this.products);
      }
    )
  }

  openDialog(prod: Product){
    let dialogRef = this.matDialog.open(OrderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      var boolValue = JSON.parse(result);

      if(boolValue){
        this.orderProduct(prod);
      }
    })

  }
  
  orderProduct(prod: Product) {
    //A Post request triggered from the button on the order that starts the Saga
    console.log('in order');
    let order = new Order();
    order.username = this.accountService.getUserName();
    order.price = prod.unitPrice;
    order.product = +prod.id;
    order.address = 'The moon';

    console.log(order);
    
    this.checkoutService.placeOrder(order).subscribe({
      next: response => {
        alert(`Your order has been received.\nOrder tracking number: ${response.orderTrackingNumber}`);
      },
      error: err => {
        alert(`There was an error: ${err.message}`);
      }
    }
  );

    

  }

}
