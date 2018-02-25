export class Company {
  company_id: number;
  company_name: string;
  address: string;
  country: string;
  customer_amount: number;

  constructor(company_name: string, address: string, country: string) {
    this.company_name = company_name;
    this.address = address;
    this.country = country;
  }
}

