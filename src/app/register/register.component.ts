import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};


  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }

  //The model attribute constructed in the html from the user input
  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
      this.router.navigate(['/products']);
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
