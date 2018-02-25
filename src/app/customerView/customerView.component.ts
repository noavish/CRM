import {Component, OnInit} from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../models/customerModel';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customerView.component.html',
  styleUrls: ['./customerView.component.css']
})
export class CustomerViewComponent implements OnInit {
  customer: Customer = new Customer();
  comments: Comment[];
  constructor(private customerService: CustomerService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCustomer(params.customer_id);
    });
  }

  getCustomer(customer_id: number) {
    this.customerService.getCustomer(customer_id).subscribe(data => {
        console.log(data);
        this.customer = data.customer[0];
        this.comments = data.comments;
        console.log(this.customer);
        console.log(this.comments);
    },
      error => {
        console.log(error);
      });
  }

  deleteCustomerClicked(customer: Customer) {
    this.customerService.deleteCustomerFromDB(customer).subscribe(
      data => {
        this.router.navigate(['/customers']);
      },
      error => {
        console.log(error);
      }
    );
  }

  addCommentToCustomer(data) {
    const comment = {
      comment_id: 0,
      date: data.date,
      text: data.text,
      customer_id: this.customer.customer_id
    };
    this.customerService.addCommentToDB(comment).subscribe(
      data => {
        console.log(data);
        this.route.params.subscribe(params => {
          this.getCustomer(params.customer_id);
        });
        // this.router.navigate(['/customers']);
      },
      error => {
        console.log(error);
      });
  }

}
