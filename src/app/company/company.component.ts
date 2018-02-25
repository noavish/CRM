import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../../models/companyModel';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[];
  companyName: string;
  address: string;
  country: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getAllCompanies().subscribe(
      companies => {
        this.companies = companies;
        console.log(this.companies);
      },
      error => {
        console.log(error);
      });
  }

  addCompanyClicked() {
    const company = new Company(this.companyName, this.address, this.country);
    this.companyService.addCompanyToDB(company).subscribe(
      data => {
        console.log(data);
        this.getCompanies();
      },
      error => {
        console.log(error);
      });
  }
}
