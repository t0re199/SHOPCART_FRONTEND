import {Order} from '../order/order';
import {OrderDetail} from '../order_detail/order-detail';

export class OrderRequest {
  order: Order;
  orderDetails: OrderDetail[];
}
