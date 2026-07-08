import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProjectsModule } from '../admin-projects/admin-projects.module';
import { AdminAnalyticsModule } from '../admin-analytics/admin-analytics.module';
import { AdminEmployeesModule } from '../admin-employees/admin-employees.module';
import { AdminAlertsModule } from '../admin-alerts/admin-alerts.module';
import { ProjectAnalyticsModule } from '../project-analytics/project-analytics.module';
import { ProjectReportsModule } from '../project-reports/project-reports.module';



@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminAnalyticsModule,
    AdminProjectsModule,
    AdminEmployeesModule,
    AdminAlertsModule,
    ProjectAnalyticsModule,
    ProjectReportsModule,
  ],
  exports: [AdminHomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminHomeModule { }
