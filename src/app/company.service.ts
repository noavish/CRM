import { Injectable } from '@angular/core';
import { Company } from '../models/companyModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Customer} from "../models/customerModel";

@Injectable()
export class CompanyService {

  constructor( private http: HttpClient ) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('/api/companies');
  }

  addCompanyToDB(company: Company): Observable<Company>  {
    return this.http.post<Company>('/api/companies', company);
  }

  getCompaniesNames(): Observable<string[]> {
    return this.http.get<string[]>('/api/companies/names');
  }

  deleteCompanyFromDB(company: Company): Observable<Company> {
    return this.http.delete<Company>(`/api/companies/${company.company_id}`);
  }


}
