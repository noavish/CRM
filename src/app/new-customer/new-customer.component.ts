import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  first_name: string;
  last_name: string;
  company_name: number;
  email: string;
  phone: number;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  addCustomerClicked() {
    const customer = {
      customer_id: 0,
      first_name: this.first_name,
      last_name: this.last_name,
      company_name: this.company_name,
      email: this.email,
      phone: this.phone
    };
    this.customerService.addCustomerToDB(customer).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/customers']);
      },
      error => {
        console.log(error);
      });
  }
}
