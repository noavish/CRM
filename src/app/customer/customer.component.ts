import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../models/customerModel';
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  displayedColumns = ['customer_id', 'first_name', 'last_name', 'company_name', 'email', 'phone', 'actions'];
  customers: Customer[];
  dataSource: MatTableDataSource<Customer>;
  searchTerm: string = '';
  constructor(private customerService: CustomerService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers(this.searchTerm).subscribe(
      customers => {
        this.customers = customers;
        this.dataSource = new MatTableDataSource(this.customers);
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
        this.dataSource = new MatTableDataSource(this.customers);
      },
      error => {
        console.log(error);
      }
    )
  }
}
