import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';



//Material components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from "@angular/material/select";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {MatTabsModule} from '@angular/material/tabs';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


import { ProductListComponent } from './products/product-list/product-list.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { Order } from 'src/common/Order';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrdersListComponent,
    HomeComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    OrderDialogComponent,
    
    
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    
    
    
    
  ],
  entryComponents:[
    OrderDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
