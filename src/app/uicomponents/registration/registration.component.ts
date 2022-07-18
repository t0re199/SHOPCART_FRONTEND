import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdministrationService} from '../../services/administration_service/administration.service';
import {Customer} from '../../data/customer/customer';
import {Router} from '@angular/router';
import {SessionStorageKeys} from '../../data/strings/SessionStorageKeys';
import {RegistrationResponse} from '../../data/registration_response/registration-response';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  customer: Customer = new Customer();

  constructor(private administrationService: AdministrationService,
              private router: Router,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      usernameField: ['t0re199'],
      passwordField: ['asdasd'],
      nameField: ['Salvatore'],
      surnameField: ['Petrolo'],
      addressField: ['Via via'],
      phoneField: ['39999999999'],
    });
  }

  ngOnInit() {
  }

  onSubmitPressed() {
    this.customer.username = this.form.controls.usernameField.value;
    this.customer.password = this.form.controls.passwordField.value;
    this.customer.name = this.form.controls.nameField.value;
    this.customer.surname = this.form.controls.surnameField.value;
    this.customer.address = this.form.controls.addressField.value;
    this.customer.phone = this.form.controls.phoneField.value;

    this.administrationService.register(this.customer).subscribe(result => {
        if (RegistrationResponse.isOk(result)) {
          alert('User successfully registered!');
          if (sessionStorage.getItem(SessionStorageKeys.CUSTOMER_KEY) == null) {
            this.router.navigate(['/login', {}]);
          }
        } else {
          alert('Registraton failed due to: ' + result.status);
        }
      },
      err => {
        alert('Invalid Data Sent to Server!');
        console.log(err);
      });
  }
}

