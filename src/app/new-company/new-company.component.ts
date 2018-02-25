import { Component, OnInit } from '@angular/core';
import {Company} from "../../models/companyModel";
import {CompanyService} from "../company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  companyName: string;
  address: string;
  country: string;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  addCompanyClicked() {
    const company = new Company(this.companyName, this.address, this.country);
    this.companyService.addCompanyToDB(company).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/companies']);
      },
      error => {
        console.log(error);
      });
  }
}
