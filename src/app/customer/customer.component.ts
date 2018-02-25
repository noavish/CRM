import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../models/customerModel';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  first_name: string;
  last_name: string;
  company_name: number;
  email: string;
  phone: number;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers().subscribe(
      customers => {
        this.customers = customers;
        console.log(this.customers);
      },
      error => {
        console.log(error);
      });
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
        this.getCustomers();
      },
      error => {
        console.log(error);
      });
  }

  deleteCustomerClicked(customer: Customer) {
    this.customerService.deleteCustomerFromDB(customer).subscribe(
      data => {
        console.log(data);
        this.getCustomers();
      },
      error => {
        console.log(error);
      }
    );
  }
}
