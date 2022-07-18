import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../data/product/product';
import { ProductProxyService } from '../../services/product_services/product_proxy_service/product-proxy.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  buyable: boolean;

  productList: Product[];

  constructor(private productProxyService: ProductProxyService) { }

  ngOnInit() {
    this.productList = this.productProxyService.findAll();
  }

}
