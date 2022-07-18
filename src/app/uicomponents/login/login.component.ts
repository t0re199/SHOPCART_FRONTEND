import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication_service/authentication.service';
import {Customer} from '../../data/customer/customer';
import {CookieService} from 'ngx-cookie-service';
import {SessionStorageKeys} from '../../data/strings/SessionStorageKeys';
import {Router} from '@angular/router';
import {MenuCommunicationService} from '../../services/menu_communication_service/menu-communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  loggedIn = false;

  private customer: Customer = new Customer();

  constructor(private authService: AuthenticationService,
              formBuilder: FormBuilder,
              private cookieService: CookieService,
              private router: Router,
              private menuCommunicationService: MenuCommunicationService
              ) {
    this.form = formBuilder.group({
      usernameField: ['t0re199'],
      passwordField: ['asdasd']
    });

    this.loggedIn = sessionStorage.getItem(SessionStorageKeys.CUSTOMER_KEY) != null;
  }

  ngOnInit() {
  }

  onSubmitPressed() {
    this.customer.username = this.form.controls.usernameField.value;
    this.customer.password = this.form.controls.passwordField.value;
    this.authService.login(this.customer).subscribe(result => {
        if (result) {
          this.loggedIn = true;
          sessionStorage.setItem(SessionStorageKeys.CUSTOMER_KEY, JSON.stringify(this.customer));
          alert('Login Successed!');
          this.menuCommunicationService.isUserLoggedIn.next(true);
          this.redirectToCorrectPage();
        } else {
          alert('Denied, retry!');
        }
      },
      err => {
        alert('Login Failed!');
        console.log(err);
      });
  }

  onLogoutPressed() {
    sessionStorage.removeItem(SessionStorageKeys.CUSTOMER_KEY);
    this.loggedIn = false;
    const customer: Customer = this.loadCustomerFormSessionStorage();
    this.authService.logout(customer).subscribe(result => {
      this.menuCommunicationService.isUserLoggedIn.next(false);
    });
  }

  redirectToCorrectPage() {
    const str = sessionStorage.getItem(SessionStorageKeys.RETURN_TO_ORDER_KEY);
    if (str != null) {
      const returnToOrder: boolean = JSON.parse(str);
      if (returnToOrder) {
        sessionStorage.removeItem(SessionStorageKeys.RETURN_TO_ORDER_KEY);
        this.router.navigate(['/order', {}]);
      }
    } else {
      this.router.navigate(['/productsList', {}]);
    }
  }

  loadCustomerFormSessionStorage(): Customer {
    const str = sessionStorage.getItem(SessionStorageKeys.CUSTOMER_KEY);
    if (str != null) {
      const customer: Customer = JSON.parse(str);
      return customer;
    }
    return null;
  }

  onSignInPressed() {
    this.router.navigate(['/signin', {}]);
  }
}
