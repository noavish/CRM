import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../models/customerModel';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  searchTerm: string = '';
  constructor(private customerService: CustomerService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers(this.searchTerm).subscribe(
      customers => {
        this.customers = customers;
        console.log(this.customers);
      },
      error => {
        console.log(error);
      });
  }

  deleteCustomerClicked(customer: Customer) {
    this.customerService.deleteCustomerFromDB(customer).subscribe(
      data => {
        this.getCustomers();
      },
      error => {
        console.log(error);
      }
    );
  }

  updateSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
    this.searchByInput();
  }

  searchByInput() {
    console.log(this.searchTerm);
    this.customerService.getAllCustomers(this.searchTerm).subscribe(
      customers => {
        console.log(customers);
        this.customers = customers;
      },
      error => {
        console.log(error);
      }
    )
  }
}
