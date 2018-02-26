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
  company: Company = new Company();

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  addCompanyClicked() {
    this.companyService.addCompanyToDB(this.company).subscribe(
      data => {
        console.log("a",data);
        this.router.navigate(['/companies']);
      },
      error => {
        console.log(error);
      });
  }
}
