import {Component, OnInit, NgZone} from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../models/customerModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customerView.component.html',
  styleUrls: ['./customerView.component.css']
})
export class CustomerViewComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,  private route: ActivatedRoute, private zone: NgZone) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCustomer(params.customer_id);
    });
  }

  getCustomer(customer_id: number) {
    this.customerService.getCustomer(customer_id).subscribe(
      customer => this.zone.run(() => this.customer = customer),
      error => {
        console.log(error);
      });
  }

  // deleteCustomerClicked(customer: Customer) {
  //   this.customerService.deleteCustomerFromDB(customer).subscribe(
  //     data => {
  //       console.log(data);
  //       this.getCustomer(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

}
