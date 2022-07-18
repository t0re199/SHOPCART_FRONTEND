import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../data/customer/customer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationResponse} from '../../data/registration_response/registration-response';


@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private static SERVER_URL = '';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  register(customer: Customer): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(AdministrationService.SERVER_URL,
                                                customer,
                                                this.httpOptions);

  }

}
