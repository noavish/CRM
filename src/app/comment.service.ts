import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Customer } from "../models/customerModel";
import { HttpClient } from "@angular/common/http";
import { Comment } from '../models/commentModel';


@Injectable()
export class CommentService {

  constructor( private http: HttpClient ) { }

  getAllComments(customer: Customer): Observable<Comment[]> {
    console.log(customer);
    return this.http.get<Comment[]>(`/api/customers/${customer.customer_id}/comments`);
  }
}
