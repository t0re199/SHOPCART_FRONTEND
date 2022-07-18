import {Product} from '../product/product';
import {Order} from '../order/order';

export class OrderDetail {
  product: Product;
  order: Order;
  amount: number;
  boughtPrice: number;
}
