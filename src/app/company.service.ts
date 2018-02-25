import { Injectable } from '@angular/core';
import { Company } from '../models/companyModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {

  constructor( private http: HttpClient ) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('/api/companies');
  }

  addCompanyToDB(company: Company): Observable<Company>  {
    return this.http.post<Company>('/api/companies', company);
  }
}
