import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../../models/companyModel';
import { MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  displayedColumns = ['company_id', 'company_name', 'address', 'country', 'customer_amount', 'actions'];
  companies: Company[];
  dataSource: MatTableDataSource<Company>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getAllCompanies().subscribe(
      companies => {
        this.companies = companies;
        this.dataSource = new MatTableDataSource(this.companies);
        console.log(this.companies);
      },
      error => {
        console.log(error);
      });
  }

  deleteCompanyClicked(company: Company) {
    this.companyService.deleteCompanyFromDB(company).subscribe(
      data => {
        this.getCompanies();
      },
      error => {
        console.log(error);
      }
    );
  }
}
