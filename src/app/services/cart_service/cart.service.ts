import {Injectable} from '@angular/core';
import {Product} from '../../data/product/product';
import {ProductProxyService} from '../product_services/product_proxy_service/product-proxy.service';
import {OrderDetail} from '../../data/order_detail/order-detail';
import {SessionStorageKeys} from '../../data/strings/SessionStorageKeys';
import {OrderService} from '../order_service/order.service';
import {OrderRequest} from '../../data/order_request/order-request';
import {Order} from '../../data/order/order';
import {OrderResponse} from '../../data/order_response/order-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartMap: Map<number, OrderDetail> = new Map();

  order: Order = {
    order_id: 0x0,
    customer: null,
    date: null,
    orderDetails: null
  };

  constructor(private productService: ProductProxyService,
              private orderService: OrderService) {
    this.loadFromSessionStorage();
  }

  add(product: Product) {
    if (!this.cartMap.has(product.id)) {
      const orderDetail: OrderDetail = {
        order: this.order,
        product: product,
        amount: 0x0,
        boughtPrice: product.price
      };
      this.cartMap.set(product.id, orderDetail);
    }
    const orderDetail: OrderDetail = this.cartMap.get(product.id);
    orderDetail.amount++;
    this.cartMap.set(product.id, orderDetail);

    this.writeInSessionStorage();
  }

  addAmount(product: Product, amount: number) {
    const orderDetail: OrderDetail = this.cartMap.get(product.id);
    orderDetail.amount += amount;
    this.cartMap.set(product.id, orderDetail);
    this.writeInSessionStorage();
  }

  remove(product: Product) {
    this.cartMap.delete(product.id);
    if (this.cartMap.size === 0x0) {
      sessionStorage.removeItem(SessionStorageKeys.CART_KEY);
    } else {
      this.writeInSessionStorage();
    }
  }

  getOrderDetails(): OrderDetail[] {
    return Array.from(this.cartMap.values());
  }

  placeOrder(): Observable<OrderResponse> {
    this.order.customer = JSON.parse(sessionStorage.getItem(SessionStorageKeys.CUSTOMER_KEY));
    const orderDetails = Array.from(this.cartMap.values());
    const orderRequest: OrderRequest = {
      order: this.order,
      orderDetails: orderDetails
    };
    return this.orderService.placeOrder(orderRequest);
  }

  getAmount(product: Product): number {
    if (!this.cartMap.has(product.id)) {
      return 0x0;
    }
    return this.cartMap.get(product.id).amount;
  }

  writeInSessionStorage() {
    const _orderDetail = this.getOrderDetails();
    if (_orderDetail != null && _orderDetail.length > 0x0) {
      sessionStorage.setItem(SessionStorageKeys.CART_KEY, JSON.stringify(_orderDetail));
    }
  }

  loadFromSessionStorage() {
    const str: string = sessionStorage.getItem(SessionStorageKeys.CART_KEY);
    if (str != null) {
      const orderDetails: OrderDetail[] = JSON.parse(str);
      for (const _orderDetail of orderDetails) {
        this.cartMap.set(_orderDetail.product.id, _orderDetail);
      }
    }
  }

  clearData() {
    this.cartMap.clear();
    sessionStorage.removeItem(SessionStorageKeys.CART_KEY);
  }
}
