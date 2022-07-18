import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../data/product/product';
import {CartService} from '../../services/cart_service/cart.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProductProxyService} from '../../services/product_services/product_proxy_service/product-proxy.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product: Product;

  currentAvailability: number;

  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private cartService: CartService,
                private productProxyService: ProductProxyService
              ) {
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.product = this.productProxyService.findById(parseInt(id, 10));
    this.currentAvailability = this.product.availability - this.cartService.getAmount(this.product);
  }

  onAddToCartPressed() {
    this.cartService.add(this.product);
    this.currentAvailability = this.product.availability - this.cartService.getAmount(this.product);
  }

}
