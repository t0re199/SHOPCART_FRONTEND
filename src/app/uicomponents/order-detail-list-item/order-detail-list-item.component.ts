import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderDetail} from '../../data/order_detail/order-detail';
import {Product} from '../../data/product/product';
import {ProductProxyService} from '../../services/product_services/product_proxy_service/product-proxy.service';
import {CartService} from '../../services/cart_service/cart.service';

@Component({
  selector: 'app-order-detail-list-item',
  templateUrl: './order-detail-list-item.component.html',
  styleUrls: ['./order-detail-list-item.component.css']
})
export class OrderDetailListItemComponent implements OnInit {

  @Input()
  orderDetail: OrderDetail;

  @Output()
  productRemovedFromCart = new EventEmitter();

  product: Product;

  constructor(private cartService: CartService,
              private productService: ProductProxyService) {
  }

  ngOnInit() {
    this.product = this.productService.findById(this.orderDetail.product.id);
  }

  onValueChanged($event) {
    const value: number = $event.target.value;
    if (value < 1 || value > this.product.availability) {
      alert('Invalid Amount!');
      $event.target.value = this.orderDetail.amount;
      return;
    }
    this.cartService.addAmount(this.product, value - this.orderDetail.amount);
  }

  onRemovePressed() {
      this.cartService.remove(this.product);
      this.productRemovedFromCart.emit();
  }

}
