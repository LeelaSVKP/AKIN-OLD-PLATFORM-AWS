import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  empForm: FormGroup;

  projects: string[] = [
    'Wind',
    'Solar',
    'Hydro',
    'Thermal',
    'Geo',
  ];

  subProjects: string [] = [
    'Turbine A',
    'Turbine B',
    'Turbine C',
    'Turbine D'
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeComponent>
  ) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      address: '',
      projectType: '',
      projectSubType: ''
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    this.dialogRef.close(true);
  }

}
