import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { CustomerViewComponent } from './customerView/customerView.component';
import { NewCompanyComponent } from "./new-company/new-company.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customers', component: CustomerComponent},
  { path: 'companies', component: CompanyComponent},
  { path: 'customerView/:customer_id', component: CustomerViewComponent},
  { path: 'addCompany', component: NewCompanyComponent},
  { path: 'addCustomer', component: NewCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
