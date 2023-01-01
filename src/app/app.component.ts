import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/common/user';
import { AccountService } from 'src/Services/account.service';
import { CheckoutService } from 'src/Services/checkout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'An Ecommerce App';
  users: any;

  constructor(private accountService: AccountService,private checkoutService: CheckoutService){}
  
  ngOnInit() {
    this.setCurrentUser();
    this.accountService.getUserName();
  }
  
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.accountService.setCurrentUser(user);
      console.log('retreiving the name')
    }
  }

}
