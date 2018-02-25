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
}
