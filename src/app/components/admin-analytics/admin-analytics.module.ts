import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnalyticsComponent } from './admin-analytics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxApexchartsModule } from 'ngx-apexcharts';



@NgModule({
  declarations: [AdminAnalyticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    NgxApexchartsModule,
  ],
  exports: [AdminAnalyticsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminAnalyticsModule { }
