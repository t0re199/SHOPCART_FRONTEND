import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../data/customer/customer';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static SERVER_URL = '';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  login(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(AuthenticationService.SERVER_URL + 'login',
                                       customer,
                                       this.httpOptions);
  }

  logout(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(AuthenticationService.SERVER_URL + 'logout',
                                       customer,
                                       this.httpOptions);
  }
}
