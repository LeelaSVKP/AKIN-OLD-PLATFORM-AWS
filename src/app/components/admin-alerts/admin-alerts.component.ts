import { Component, OnInit } from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-admin-alerts',
  templateUrl: './admin-alerts.component.html',
  styleUrls: ['./admin-alerts.component.scss']
})
export class AdminAlertsComponent implements OnInit {
  gridColumnDefinitions: Column[] = [];
  slickGridOptions: GridOption = {};
  slickDataset: any[] = [];
  sessionValue: string | null;

  constructor() {
    this.sessionValue = localStorage.getItem('selected_project');
  }

  ngOnInit(): void {
    this.gridColumnDefinitions = [
      { id: 'id', name: 'Alert Id', field: 'id', sortable: true, },
      { id: 'alertType', name: 'Alert Type', field: 'alertType', sortable: true, filterable: true },
      { id: 'name', name: 'Date & Time', field: 'name', sortable: true, filterable: true },
      { id: 'notification', name: 'Notification Type', field: 'notification', sortable: true, filterable: true },
      { id: 'status', name: 'Status', field: 'status', sortable: true, filterable: true, formatter: (row: number, cell: number, value: any,) => this.renderStatusCell(value), },
      { id: 'emailSent', name: 'Description', field: 'emailSent', sortable: true, filterable: true },
      { id: 'emailId', name: 'Receiver Details', field: 'emailId', sortable: true, filterable: true }
    ];

    this.slickGridOptions = {
      enableAutoResize: true,
      enableCellNavigation: true,
      enableSorting: true,
      autoResize: {
        container: '#admin-alerts'
      },
      editable: true,
      enableCellMenu: true,
      enableColumnPicker: false,
      enableColumnReorder: true,
      enableExcelCopyBuffer: false,
      enableFiltering: true,
      enableAsyncPostRender: true,
      asyncPostRenderDelay: 0,
      darkMode: true
    };

    const regularData = [
      { id: 1, name: '28/05/2024 07:28AM', alertType: 'Analysis', emailSent: 'Sentimental Analysis', notification: 'EMAIL', emailId: 'akinanalytics@gmail.com', status: 'Active' },
      { id: 2, name: '28/05/2024 05:45PM', alertType: 'Report', emailSent: 'Person Detection Report', notification: 'EMAIL', emailId: 'akinanalytics@gmail.com', status: 'Success' },
    ];

    const inventoryData = [
      { id: 1, name: '27/09/2024 07:28AM', alertType: 'InStock Quantity Report', emailSent: 'Instock Warehouse Quantity', notification: 'EMAIL', emailId: 'akinanalytics@gmail.com', status: 'Success' },
      { id: 2, name: '29/09/2024 10:45AM', alertType: 'Outstock Quantity Report', emailSent: 'Outstock Warehouse Quantity', notification: 'EMAIL', emailId: 'akinanalytics@gmail.com', status: 'Success' },
      { id: 3, name: '30/09/2024 05:45PM', alertType: 'Warehouse Stock Report', emailSent: 'Instock & Outstock Qty Not Matches', notification: 'EMAIL', emailId: 'akinanalytics@gmail.com', status: 'Active' },
    ];

    this.slickDataset = (this.sessionValue === 'inventory management') ? inventoryData : regularData;
  }

  renderStatusCell(value: any): string {
    if (value === 'Success') {
      return `<div style="background: #006400; color: #FFF;">
        <span style="margin-right: 5px;">${value}</span>
        <span><i class="fa fa-check-square-o" aria-hidden="true"></i></span>
    </div>
    `;
    } else {
      return `<div style="background: #ED3419; color: #000;">
        <span style="margin-right: 5px;">${value}</span>
        <span><i class="fa fa-square-o" aria-hidden="true"></i></span>
    </div>
    `;
    }
  }

}
