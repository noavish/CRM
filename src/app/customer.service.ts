import { Injectable } from '@angular/core';
import { Customer } from '../models/customerModel';
// import { Comment } from '../models/commentModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Company} from '../models/companyModel';


@Injectable()
export class CustomerService {

  constructor( private http: HttpClient ) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customers');
  }

  addCustomerToDB(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('/api/customers', customer);

  }

  deleteCustomerFromDB(customer: Customer): Observable<Customer> {
    return this.http.delete<Customer>(`/api/customers/${customer.customer_id}`);
  }

  getCustomer(customer_id: number): Observable<Customer> {
    console.log('service')
    console.log(customer_id);
    return this.http.get<Customer>(`/api/customers/customerView/${customer_id}`);
  }
}
