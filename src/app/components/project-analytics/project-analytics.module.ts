import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectAnalyticsComponent } from './project-analytics.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';



@NgModule({
  declarations: [ProjectAnalyticsComponent],
  imports: [
    CommonModule,
    NgxApexchartsModule
  ],
  exports: [ProjectAnalyticsComponent]
})
export class ProjectAnalyticsModule { }
