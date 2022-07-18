import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buyable-product-list',
  templateUrl: './buyable-product-list.component.html',
  styleUrls: ['./buyable-product-list.component.css']
})
export class BuyableProductListComponent implements OnInit {

  showAddToCartButton = true;

  constructor() {
  }

  ngOnInit() {
  }

}
