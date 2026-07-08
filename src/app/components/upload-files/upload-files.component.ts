import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/sharedService/shared.service';


@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent {
  industryTypesControl = new FormControl<string | null>(null, Validators.required);
  projectTypesControl = new FormControl<string | null>(null, Validators.required);
  projectSubTypesControl = new FormControl<string | null>(null, Validators.required);
  associationType: string | null = null;
  selectedIndustry: string | null = null;
  selectedProject: string | null = null;
  selectedSubProject: string | null = null;

  industries: string[] = [];

  allProjects: { [key: string]: string[] } = {};

  allSubProjects: { [key: string]: string[] } = {
    'Stock Allocation': ['Optimized Stock Allocation Report'],
    'Customer Analysis': ['Customer Segmentation Report'],
    'Mosquito Eradication': ['Mosquito Density Heatmap'],
    'Traffic Optimization': ['Traffic Congestion Heatmaps and Optimization Stategies'],
    'Vehicle Management': ['Vehicle Management'],
    'Patrolling Highways & Accident Support': ['Vehicle Monitoring'],
    'Garbage Pileups': ['Garbage Pileups'],
    'Water Logging & Green Cover Assessment': ['Water Body Monitoring System', 'Green Cover Assessment'],
    'Land Encroachment': [],
    'BHEL Solar': ['Asset Inventory & Monitoring','Panel Health Analysis','Energy Yield Insights','Vegetation Management'],
    'Wind Efficiency': ['Wind Turbines Report'],
    'Transmission Lines Health': ['Transmission Lines Fault Default Alerts'],
    'Volumetric Analysis': ['Daily Mine Volume Reports'],
    'Haul Road Condition Monitoring': ['Haul Road Health Assessment Dashboard'],
    'Roads: Pothole Detection and Crack Analysis': ['Road Defect Map'],
    'Bridges: Structural Integrity and Crack Detection': ['Bridge Structural Health Report'],
    'Real Estate Monitoring': ['Monthly Project Progress Report'],
    'Progress Analysis for Large Scale Projects': ['Resource Utilization Insights'],
    'Green Cover Assessment': ['Forest Health Index'],
    'Wildlife Tracking': ['Wildlife Movement Monitoring Dashboard'],
    'Flood Risk Assessment': ['Flood Prone Risk Map'],
    'Emergency Response Optimization': ['Real Time Emergency Response Condition Dashboard'],
    'Crowd Management during festivals, spiritual events and political or large gatherings': ['Crowd Density Heatmap and Management Strategies'],
    'VVIP Movement': ['Food & Medical Supplies', 'VVIP Movement'],
    '10x Zoom': [],
    'Day & Night': ['Day & Night'],
    'EHS': ['PPE Detection']
  };

  projects: string[] = [];

  subProjects: string[] = [];

  files: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<UploadFilesComponent>,
    private toastr: ToastrService,
    private sharedService: SharedService,
  ) {
    this.associationType = localStorage.getItem('association_type');
    this.displayIndustries(this.associationType);
  }

  displayIndustries = (associationType: any) => {
    if (this.associationType === 'mines') {
      this.industries = ['Infrastructure'];
      this.allProjects = {
        'Infrastructure': ['Mines']
      };
    } else if (this.associationType === 'roads') {
      this.industries = ['Infrastructure'];
      this.allProjects = {
        'Infrastructure': ['Roads']
      };
    } else if (this.associationType === 'solar') {
      this.industries = ['Energy & Utilities'];
      this.allProjects = {
        'Energy & Utilities': ['Solar']
      };
    } else if (this.associationType === 'wind') {
      this.industries = ['Energy & Utilities'];
      this.allProjects = {
        'Energy & Utilities': ['Wind']
      };
    } else if (this.associationType === 'transmission_lines') {
      this.industries = ['Energy & Utilities'];
      this.allProjects = {
        'Energy & Utilities': ['Transmission Lines']
      };
    } else if (this.associationType === 'forest_tree_monitoring') {
      this.industries = ['Forestry'];
      this.allProjects = {
        'Forestry': ['Forest Tree Monitoring']
      };
    } else if (this.associationType === 'afforestation') {
      this.industries = ['Forestry'];
      this.allProjects = {
        'Forestry': ['Afforestation']
      };
    } else if (this.associationType === 'wildlife_tracking') {
      this.industries = ['Environmental Monitoring'];
      this.allProjects = {
        'Environmental Monitoring': ['Wildlife Tracking']
      };
    } else if (this.associationType === 'wildfire_detection') {
      this.industries = ['Environmental Monitoring'];
      this.allProjects = {
        'Environmental Monitoring': ['Wildfire Detection']
      };
    } else if (this.associationType === 'akin') {
      this.industries = ['Inventory Management', 'Retail Analytics', 'Smart City Living', 'Energy & Utilities', 'Mining', 'Infrastructure', 'Construction Analytics',
        'Forest & Environment', 'Disaster Management', 'Surveillance'];
      this.allProjects = {
        'Inventory Management': ['Stock Allocation'],
        'Retail Analytics': ['Customer Analysis'],
        'Smart City Living': ['Mosquito Eradication', 'Traffic Optimization', 'Vehicle Management', 'Patrolling Highways & Accident Support', 'Garbage Pileups', 'Water Logging & Green Cover Assessment', 'Land Encroachment'],
        'Energy & Utilities': ['BHEL Solar', 'Wind Efficiency', 'Transmission Lines Health'],
        'Mining': ['Volumetric Analysis', 'Haul Road Condition Monitoring'],
        'Infrastructure': ['Roads: Pothole Detection and Crack Analysis', 'Bridges: Structural Integrity and Crack Detection'],
        'Construction Analytics': ['Real Estate Monitoring', 'Progress Analysis for Large Scale Projects'],
        'Forest & Environment': ['Green Cover Assessment', 'Wildlife Tracking'],
        'Disaster Management': ['Flood Risk Assessment', 'Emergency Response Optimization', 'Crowd Management during festivals, spiritual events and political or large gatherings', 'VVIP Movement'],
        'Surveillance': ['10x Zoom', 'Day & Night', 'EHS']
      };
    } else if (this.associationType === 'admin') {
      this.industries = ['Inventory Management', 'Retail Analytics', 'Smart City Living', 'Energy & Utilities', 'Mining', 'Infrastructure', 'Construction Analytics',
        'Forest & Environment', 'Disaster Management', 'Surveillance'];
      this.allProjects = {
        'Inventory Management': ['Stock Allocation'],
        'Retail Analytics': ['Customer Analysis'],
        'Smart City Living': ['Mosquito Eradication', 'Traffic Optimization', 'Vehicle Management', 'Patrolling Highways & Accident Support', 'Garbage Pileups', 'Water Logging & Green Cover Assessment', 'Land Encroachment'],
        'Energy & Utilities': ['BHEL Solar', 'Wind Efficiency', 'Transmission Lines Health'],
        'Mining': ['Volumetric Analysis', 'Haul Road Condition Monitoring'],
        'Infrastructure': ['Roads: Pothole Detection and Crack Analysis', 'Bridges: Structural Integrity and Crack Detection'],
        'Construction Analytics': ['Real Estate Monitoring', 'Progress Analysis for Large Scale Projects'],
        'Forest & Environment': ['Green Cover Assessment', 'Wildlife Tracking'],
        'Disaster Management': ['Flood Risk Assessment', 'Emergency Response Optimization', 'Crowd Management during festivals, spiritual events and political or large gatherings', 'VVIP Movement'],
        'Surveillance': ['10x Zoom', 'Day & Night', 'EHS']
      };
    }
  }

  onIndustryChange(value: any): void {
    this.selectedIndustry = value;
    if (this.selectedIndustry) {
      this.projects = this.allProjects[this.selectedIndustry] || [];
    } else {
      this.projects = [];
    }
    this.subProjects = [];
    this.selectedProject = null;
    this.selectedSubProject = null;
  }

  onProjectChange(value: any): void {
    this.selectedProject = value;
    if (this.selectedProject) {
      this.subProjects = this.allSubProjects[this.selectedProject] || [];
    } else {
      this.subProjects = [];
    }
    this.selectedSubProject = null;
  }

  closeDialog() {
    this.dialogRef.close(true);
  }

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: any) {
    const files = event.target.files;
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: any, decimals: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  uploadFiles(): void {
    this.toastr.success('Files Uploaded Successfully');
    this.sharedService.updateAnalyticsData();
    this.dialogRef.close(true);
  }
}
