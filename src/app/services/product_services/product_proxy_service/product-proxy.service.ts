import {Injectable} from '@angular/core';
import {ProductService} from '../product_service/product.service';
import {Product} from '../../../data/product/product';
import {SessionStorageKeys} from '../../../data/strings/SessionStorageKeys';

@Injectable({
  providedIn: 'root'
})
export class ProductProxyService {

  public productsMap: Map<number, Product> = new Map();

  public productsList: Product[] = [];

  constructor(private productService: ProductService) {
    if (sessionStorage.getItem(SessionStorageKeys.PRODUCT_LIST_KEY) != null) {
      this.loadFromSessionStorage();
    } else {
      this.init();
    }
  }

  private loadFromSessionStorage() {
    this.productsList = JSON.parse(sessionStorage.getItem(SessionStorageKeys.PRODUCT_LIST_KEY));
    for (const p of this.productsList) {
      this.productsMap.set(p.id, p);
    }
  }

  private writeInSessionStorage() {
    if (this.productsList.length > 0x0) {
      sessionStorage.setItem(SessionStorageKeys.PRODUCT_LIST_KEY, JSON.stringify(this.productsList));
    }
  }

  private init() {
    this.productService.findAll().subscribe(result => {
      for (const product of result) {
        this.productsMap.set(product.id, product);
        this.productsList.push(product);
      }
      this.writeInSessionStorage();
    });
  }

  findById(id: number): Product {
    if (this.productsMap.has(id)) {
      return this.productsMap.get(id);
    }

    let product: Product = null;
    this.productService.findById(id).subscribe(result => {
      product = result;
    });
    this.productsMap.set(product.id, product);
    this.productsList.push(product);
    this.writeInSessionStorage();
    return product;
  }

  findAll(): Product[] {
    return this.productsList;
  }

  clear() {
    this.productsMap.clear();
    this.productsList = [];
  }

  reload() {
    sessionStorage.removeItem(SessionStorageKeys.PRODUCT_LIST_KEY);
    this.clear();
    this.init();
  }
}
