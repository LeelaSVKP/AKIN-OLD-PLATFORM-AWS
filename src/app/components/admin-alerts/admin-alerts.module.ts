import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAlertsComponent } from './admin-alerts.component';
import { AngularSlickgridModule } from 'angular-slickgrid';



@NgModule({
  declarations: [AdminAlertsComponent],
  imports: [
    CommonModule,
    AngularSlickgridModule.forRoot(),
  ],
  exports: [AdminAlertsComponent]
})
export class AdminAlertsModule { }
