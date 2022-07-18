import {OrderDetail} from '../order_detail/order-detail';
import {Customer} from '../customer/customer';

export class Order {
  order_id: number;
  customer: Customer;
  date: Date;
  orderDetails: OrderDetail[];
}
