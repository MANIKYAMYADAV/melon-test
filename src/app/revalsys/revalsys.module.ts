import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevalsysRoutingModule } from './revalsys-routing.module';
import { RevalsysComponent } from './revalsys.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [
    RevalsysComponent,
    FeedbackComponent,
    ProductsComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeesComponent
    
  ],
  imports: [
    CommonModule,
    RevalsysRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,

  ]
})
export class RevalsysModule { }
