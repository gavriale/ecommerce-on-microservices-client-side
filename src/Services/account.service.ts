import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from '../common/user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'http://localhost:8000/';
  //an Observable to save the current user - we are interested in one user which will be null or a current User
  private currentUserSource = new ReplaySubject<User>(1);
  
  //$ sign is a convention that a variable is an Observable
  currentUser$ = this.currentUserSource.asObservable();

  userName: String;

  constructor(private http: HttpClient) { }

  /**
   * @param model is the object we pass in the post request
   */
  login(model: any) {
    return this.http.post(this.baseUrl + 'api/account/login', model).pipe(
      map((response: User) => {
        const user = response;
        console.log("in the service");
        console.log(response);
        this.userName = user.username;
        
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));

          //sending next message with the next data to the currentUserSource
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'api/account/register', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getUserName(): string {
    let user = localStorage.getItem('user');
    console.log(typeof(user));
    console.log('......')
    let userJson = JSON.parse(user);
    console.log(typeof(userJson));
    let userName = userJson.username;
    console.log(userName);
    return userName;  
  }



}