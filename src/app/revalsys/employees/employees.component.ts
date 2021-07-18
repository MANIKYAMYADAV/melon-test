import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
declare var $: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeForm: FormGroup;
  todayDate: Date = new Date();
  config: any;
  searchTerm: any;
  employees: any[] = [];
  
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Product.xlsx');
  }

  constructor(
    private fb: FormBuilder, private router: Router) {
    this.employeeForm = this.fb.group({
      employeeName:['',Validators.required],
      employeeId:['',Validators.required],
      // emailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      // password: ['', Validators.required],
    })
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.employees.length
    };
    
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit(): void {
  }
  
  employeeData(data){
    console.log(data);
  }

}
