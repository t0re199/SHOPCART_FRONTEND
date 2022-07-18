import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart_service/cart.service';
import {OrderDetail} from '../../data/order_detail/order-detail';
import {OrderService} from '../../services/order_service/order.service';
import {Customer} from '../../data/customer/customer';
import {SessionStorageKeys} from '../../data/strings/SessionStorageKeys';
import {Router} from '@angular/router';
import {OrderResponse} from '../../data/order_response/order-response';
import {ProductProxyService} from '../../services/product_services/product_proxy_service/product-proxy.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderDetails: OrderDetail[];

  constructor(private cartService: CartService,
              private productService: ProductProxyService,
              private router: Router) {
  }

  ngOnInit() {
    this.orderDetails = this.cartService.getOrderDetails();
  }

  onPlaceOrderPressed() {
    if (sessionStorage.getItem(SessionStorageKeys.CUSTOMER_KEY) != null) {
      this.cartService.placeOrder().subscribe(result => {
          this.cartService.clearData();
          this.productService.reload();
          this.router.navigate(['/orderReporter'], { state: { orderResponse: JSON.stringify(result)}});
        },
        err => {
          alert('Server Error!');
        });
    } else {
      alert('Login Required!');
      sessionStorage.setItem(SessionStorageKeys.RETURN_TO_ORDER_KEY, JSON.stringify(true));
      this.router.navigate(['/login', {}]);
    }
  }

  onProductRemovedFromCart() {
    this.orderDetails = this.cartService.getOrderDetails();
  }

}
