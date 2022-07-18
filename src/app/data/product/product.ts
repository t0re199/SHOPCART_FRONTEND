import { Category } from '../category/category';

export class Product {
  id: number;
  name: string;
  description: string;
  availability: number;
  price: number;
  category: Category;
}
