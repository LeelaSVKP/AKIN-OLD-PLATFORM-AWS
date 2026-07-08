import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeSchema } from './employee-table.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.scss']
})
export class AdminEmployeesComponent implements OnInit {
  tableData: EmployeeSchema[];
  dataSource: MatTableDataSource<EmployeeSchema>;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeeDialog: MatDialog
  ) {
    this.tableData = [
      { firstName: 'Test', lastName: '123', email: '123@gmail.com', dob: 'Sat Jun 15 2019', gender: 'Male', address: 'Hyderabad Telangana', projectType: 'Wind', projectSubType: 'Turbine A, Turbine C' },
      { firstName: 'Mock', lastName: '456', email: '456@gmail.com', dob: 'Sat Jun 15 2019', gender: 'Male', address: 'Vizag Andhra Pradesh', projectType: 'Wind', projectSubType: 'Turbine B' }
    ];
    this.displayedColumns = ['firstName', 'lastName', 'email', 'dob', 'gender', 'address', 'projectType', 'projectSubType', 'action'];
    this.dataSource = new MatTableDataSource(this.tableData);

  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddEmployeeForm() {
    const dialogRef = this.employeeDialog.open(AddEmployeeComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log('Employee Dialog Closed');
        }
      },
    });
  }

  deleteEmployee(id: number) {
    console.log(id);
  }

  openEmployeeEditForm(data: any) {
    const dialogRef = this.employeeDialog.open(AddEmployeeComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log('Employee Dialog Closed');
        }
      },
    });
  }

}
