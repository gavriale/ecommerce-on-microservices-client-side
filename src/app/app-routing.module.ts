import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

    {path: '',component:HomeComponent},
    {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
      {path: 'products',component: ProductListComponent,canActivate: [AuthGuard]},
      {path: 'orders',component: OrdersListComponent,canActivate: [AuthGuard]},
    ]
    },
    {path: '**', component: HomeComponent, pathMatch: 'full'},
           
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
