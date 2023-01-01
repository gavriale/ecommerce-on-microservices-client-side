import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/Services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

username : string ="";
password : string ="";
show: boolean= false;
model: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  //submit has to go to the AccountService
  submit(){
    console.log("user name is " + this.username)
    this.clear();
  }

  login(){
    console.log("user name is " + this.username)
    console.log(this.model);
    this.clear();
  }

  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
  }

}
