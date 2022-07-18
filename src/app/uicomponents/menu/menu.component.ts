import {Component, OnInit} from '@angular/core';
import {SessionStorageKeys} from '../../data/strings/SessionStorageKeys';
import {Customer} from '../../data/customer/customer';
import {MenuCommunicationService} from '../../services/menu_communication_service/menu-communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private static NO_USER_LOGGED = 'You\'re not logged in';
  toShowStr = '';

  constructor(private menuCommunicationService: MenuCommunicationService) {
    this.menuCommunicationService.isUserLoggedIn.asObservable().subscribe(result => {
      if (result) {
        const customer: Customer = this.loadCustomerFormSessionStorage();
        this.toShowStr = 'Welcome, ' + customer.username;
      } else {
        this.toShowStr = MenuComponent.NO_USER_LOGGED;
      }
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem(SessionStorageKeys.CUSTOMER_KEY) != null) {
      const customer: Customer = this.loadCustomerFormSessionStorage();
      this.toShowStr = 'Welcome, ' + customer.username;
    } else {
      this.toShowStr = MenuComponent.NO_USER_LOGGED;
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
}
