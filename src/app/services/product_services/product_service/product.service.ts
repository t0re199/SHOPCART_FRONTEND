import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable, of} from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';
import {Product} from '../../../data/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static SERVER_URL = '';

  constructor(private http: Http) {

  }

  public findById(id: number | string): Observable<Product> {
    return this.http.get(ProductService.SERVER_URL + id)
      .pipe(
        map((responseData) => responseData.json()),
        catchError(this.handleError('findById', null))
      );
  }

  public findAll(): Observable<Product[]> {
    return this.http.get(ProductService.SERVER_URL)
      .pipe(map((responseData) => responseData.json()));
  }


  public findAllInRange(from: number, to: number): Observable<Product[]> {
    return this.http.get(ProductService.SERVER_URL + '?start=' + from + '&max=' + to)
                    .pipe(map((responseData) => responseData.json()));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('LOGGER: ' + message);
  }
}
