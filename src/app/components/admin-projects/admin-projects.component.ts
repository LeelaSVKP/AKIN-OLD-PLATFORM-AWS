import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AddProjectComponent } from './add-project/add-project.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularUtilService, Column, GridOption } from 'angular-slickgrid';
import { CustomCellRendererComponent } from './custom-cell-renderer/custom-cell-renderer.component';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss'],
  providers: [AngularUtilService, CustomCellRendererComponent],
})
export class AdminProjectsComponent implements OnInit, AfterViewInit {
  gridColumnDefinitions: Column[] = [];
  slickGridOptions: GridOption = {};
  slickDataset: any[] = [];
  associationType: string | null = null;
  constructor(
    private employeeDialog: MatDialog,
    private angularUtilService: AngularUtilService
  ) {
    this.slickDataset = [];
    this.associationType = localStorage.getItem('association_type');
    this.setSlickDataSet();
  }

  ngOnInit(): void {
    this.gridColumnDefinitions = [
      {
        id: 'projectId', name: 'Project Id', field: 'projectId', sortable: true, filterable: true,
        formatter: () => '...',
        asyncPostRender: this.renderInteractiveAngularComponent.bind(this),
        params: {
          component: CustomCellRendererComponent,
          angularUtilService: this.angularUtilService,
        }
      },
      { id: 'industryType', name: 'Industry Type', field: 'industryType', sortable: true, filterable: true, },
      { id: 'projectType', name: 'Deliverables', field: 'projectType', sortable: true, filterable: true, },
      { id: 'subProject', name: 'Project', field: 'subProject', sortable: true, filterable: true, },
      { id: 'address', name: 'Project Location', field: 'address', sortable: true, filterable: true, }
    ];

    this.slickGridOptions = {
      enableAutoResize: true,
      enableCellNavigation: false,
      enableSorting: true,
      autoResize: {
        container: '#admin-projects'
      },
      editable: true,
      enableCellMenu: true,
      enableColumnPicker: false,
      enableColumnReorder: true,
      enableExcelCopyBuffer: false,
      enableFiltering: true,
      enableAsyncPostRender: true,
      asyncPostRenderDelay: 0,
      darkMode: true,
      params: {
        angularUtilService: this.angularUtilService
      }
    };
  }

  ngAfterViewInit(): void {
    document.querySelector('.grid-container1')?.classList.add('dark-mode');
  }

  setSlickDataSet = () => {
    if (this.associationType === 'mines') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Infrastructure', projectType: 'Mines', subProject: 'Rajasthan Site', address: 'Wonder Cement Ltd, Tehsil, RK Nagar, Nimbahera, Rajasthan 312601' });
    } else if (this.associationType === 'roads') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Infrastructure', projectType: 'Roads', subProject: 'TS Site', address: 'Madhapur, Hyderabad, Telangana' });
    } else if (this.associationType === 'solar') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Energy & Utilities', projectType: 'Solar', subProject: 'Tamil Nadu Site', address: 'Rameshwaram, Tamil Nadu' });
    } else if (this.associationType === 'wind') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Energy & Utilities', projectType: 'Wind', subProject: 'Tirupathi', address: 'Tirupathi, Chithoor, Andhra Pradesh' });
    } else if (this.associationType === 'transmission_lines') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Energy & Utilities', projectType: 'Power Transmission Lines', subProject: 'Chattisgarh Site', address: 'Kota, Bilaspur, Chattisgarh' });
    } else if (this.associationType === 'forest_tree_monitoring') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Forestry', projectType: 'Forest Tree Monitoring', subProject: 'Nallamalla Site', address: 'Kurnool, Andhra Pradesh' });
    } else if (this.associationType === 'afforestation') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Forestry', projectType: 'Afforestation', subProject: 'Nallamalla Site', address: 'Kurnool, Andhra Pradesh' });
    } else if (this.associationType === 'wildlife_tracking') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Environmental Monitoring', projectType: 'Wildlife Tracking', subProject: 'Gujarata Site', address: 'Gir, Gujarat' });
    } else if (this.associationType === 'wildfire_detection') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Environmental Monitoring', projectType: 'Wildfire Detection', subProject: 'Pune Site', address: 'Hinjawedi, Pune, Maharastra' });
    } else if (this.associationType === 'akin' || this.associationType === 'admin') {
      this.slickDataset.push({ id: 1, projectId: 'IFMN02', industryType: 'Industry', projectType: 'Project', subProject: 'SP0123', address: 'Hyderabad, Telangana' });
    }
  }


  openAddProjectForm() {
    const dialogRef = this.employeeDialog.open(AddProjectComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log('Project Dialog Closed');
        }
      },
    });
  }

  renderInteractiveAngularComponent(cellNode: HTMLElement, row: number, dataContext: any, colDef: Column) {
    if (colDef.params.component) {
      this.angularUtilService.createInteractiveAngularComponent(colDef.params.component, cellNode, { item: dataContext });
    }
  }

}
