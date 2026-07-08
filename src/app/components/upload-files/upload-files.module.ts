import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFilesComponent } from './upload-files.component';
import { DragndropDirective } from 'src/app/directives/dragndrop/dragndrop.directive';
import { UploadProgressBarComponent } from './upload-progress-bar/upload-progress-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [UploadFilesComponent, DragndropDirective, UploadProgressBarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [UploadFilesComponent],
})
export class UploadFilesModule { }
