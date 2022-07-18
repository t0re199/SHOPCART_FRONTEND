import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../data/product/product';
import {CartService} from '../../services/cart_service/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  DESCRIPTION_LENGTH = 0xa;

  @Input()
  buyable: boolean;

  @Input()
  product: Product;

  currentAvailability: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.currentAvailability = this.product.availability - this.cartService.getAmount(this.product);
  }

  onAddToCartPressed() {
    this.cartService.add(this.product);
    this.currentAvailability = this.product.availability - this.cartService.getAmount(this.product);
  }

}
