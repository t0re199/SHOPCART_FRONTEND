import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../data/order/order';
import {OrderDetail} from '../../data/order_detail/order-detail';
import {OrderRequest} from '../../data/order_request/order-request';
import {OrderResponse} from '../../data/order_response/order-response';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private static SERVER_URL = '';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  placeOrder(orderRequest: OrderRequest): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(OrderService.SERVER_URL, orderRequest, this.httpOptions);
  }
}
