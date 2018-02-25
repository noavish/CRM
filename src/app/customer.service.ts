import { Injectable } from '@angular/core';
import { Customer } from '../models/customerModel';
import { Comment } from '../models/commentModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class CustomerService {

  constructor( private http: HttpClient ) { }

  getAllCustomers(searchTerm: string): Observable<Customer[]> {
    console.log('service')
    let params = new HttpParams();
    searchTerm ? params = params.set('name', searchTerm) : null;
    return this.http.get<Customer[]>('/api/customers', {params: params});
  }

  addCustomerToDB(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('/api/customers', customer);

  }

  deleteCustomerFromDB(customer: Customer): Observable<Customer> {
    return this.http.delete<Customer>(`/api/customers/${customer.customer_id}`);
  }

  getCustomer(customer_id: number): Observable<any> {
    return this.http.get<any>(`/api/customers/customerView/${customer_id}`);
  }

  addCommentToDB(comment: Comment): Observable<Comment> {
    console.log(comment);
    return this.http.post<Comment>(`/api/customers/customerView/${comment.customer_id}/addComment`, comment);
  }
}
