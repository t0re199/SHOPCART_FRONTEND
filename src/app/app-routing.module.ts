import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './uicomponents/product-list/product-list.component';
import { ProductComponent } from './uicomponents/product/product.component';
import { BuyableProductListComponent } from './uicomponents/buyable-product-list/buyable-product-list.component';
import { NotFoundComponent } from './uicomponents/not-found/not-found.component';
import {OrderListComponent} from './uicomponents/order-list/order-list.component';
import {LoginComponent} from './uicomponents/login/login.component';
import {RegistrationComponent} from './uicomponents/registration/registration.component';
import {OrderReporterComponent} from './uicomponents/order-reporter/order-reporter.component';

const routes: Routes = [
  { path: 'productsList', component: BuyableProductListComponent },
  { path: 'plainProductsList', component: ProductListComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'order', component: OrderListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: RegistrationComponent },
  { path: 'orderReporter', component: OrderReporterComponent },
  { path: '',
    redirectTo: '/productsList',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
