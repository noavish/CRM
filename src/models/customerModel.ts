export class Customer {
  customer_id: number;
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  phone: number;

  constructor(customer_id?: number, first_name?: string, last_name?: string, company_name?: string, email?: string, phone?: number) {
    this.customer_id = customer_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.company_name = company_name;
    this.email = email;
    this.phone = phone;
  }
}
