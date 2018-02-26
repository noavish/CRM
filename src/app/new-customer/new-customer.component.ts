import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import { Router } from '@angular/router';
// import {MatTableDataSource} from "@angular/material";
import { CompanyService } from "../company.service";
import {Customer} from "../../models/customerModel";
// import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  companies: string[];
  constructor(private customerService: CustomerService, private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.getCompaniesNames();
  }

  getCompaniesNames() {
    this.companyService.getCompaniesNames().subscribe(
      companiesNames => {
        this.companies = companiesNames;
        // this.dataSource = new MatTableDataSource(this.companies);
        console.log(this.companies);
      },
      error => {
        console.log(error);
      });
  }

  addCustomerClicked() {
    console.log(this.customer);
    this.customerService.addCustomerToDB(this.customer).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/customers']);
      },
      error => {
        console.log(error);
      });
  }
}
