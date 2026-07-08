import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectReportsComponent } from './project-reports.component';
import { FormsModule } from '@angular/forms';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [ProjectReportsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxApexchartsModule,
    NgxImageZoomModule
  ],
  exports: [ProjectReportsComponent]
})
export class ProjectReportsModule { }
