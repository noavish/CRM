import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';



import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { CommentComponent } from './comment/comment.component';
import { CustomerService } from './customer.service';
import { CompanyService } from './company.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomerViewComponent } from './customerView/customerView.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FilterComponent } from './filter/filter.component';
import { CommentService } from "./comment.service";
import { AddCommentComponent } from './add-comment/add-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompanyComponent,
    CustomerComponent,
    CommentComponent,
    HomeComponent,
    CustomerViewComponent,
    NewCompanyComponent,
    NewCustomerComponent,
    FilterComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [CustomerService, CompanyService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
