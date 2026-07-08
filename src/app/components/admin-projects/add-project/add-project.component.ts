import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  projectForm: FormGroup;

  projects: string[] = [
    'Wind',
    'Solar',
    'Hydro',
    'Thermal',
    'Geo',
  ];

  subProjects: string[] = [
    'Turbine A',
    'Turbine B',
    'Turbine C',
    'Turbine D'
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProjectComponent>
  ) {
    this.projectForm = this.fb.group({
      projectType: '',
      projectSubType: '',
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.projectForm.patchValue(this.data);
  }

  onFormSubmit() {
    this.dialogRef.close(true);
  }

}
