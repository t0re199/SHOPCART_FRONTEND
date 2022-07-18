import { Component, OnInit } from '@angular/core';
import {OrderResponse} from '../../data/order_response/order-response';
import {SessionStorageKeys} from '../../data/strings/SessionStorageKeys';

@Component({
  selector: 'app-order-reporter',
  templateUrl: './order-reporter.component.html',
  styleUrls: ['./order-reporter.component.css']
})
export class OrderReporterComponent implements OnInit {

  orderReponse: OrderResponse;

  isOk: boolean;

  constructor() {
    this.orderReponse = JSON.parse(window.history.state.orderResponse);
    this.isOk = OrderResponse.isOk(this.orderReponse);
  }

  ngOnInit() {
  }

}
