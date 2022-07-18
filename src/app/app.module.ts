import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {LoginComponent} from './uicomponents/login/login.component';
import {RegistrationComponent} from './uicomponents/registration/registration.component';
import {ProductComponent} from './uicomponents/product/product.component';
import {ProductListComponent} from './uicomponents/product-list/product-list.component';
import {ProductListItemComponent} from './uicomponents/product-list-item/product-list-item.component';
import {BuyableProductListComponent} from './uicomponents/buyable-product-list/buyable-product-list.component';
import {NotFoundComponent} from './uicomponents/not-found/not-found.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomInterceptor} from './custom-interceptor';
import {OrderListComponent} from './uicomponents/order-list/order-list.component';
import {OrderDetailListItemComponent} from './uicomponents/order-detail-list-item/order-detail-list-item.component';
import {AccessDeniedComponent} from './uicomponents/access-denied/access-denied.component';
import {MenuComponent} from './uicomponents/menu/menu.component';
import { OrderReporterComponent } from './uicomponents/order-reporter/order-reporter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductComponent,
    ProductListComponent,
    ProductListItemComponent,
    BuyableProductListComponent,
    NotFoundComponent,
    OrderListComponent,
    OrderDetailListItemComponent,
    AccessDeniedComponent,
    MenuComponent,
    OrderReporterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  },
    CookieService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
