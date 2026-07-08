import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-reports',
  templateUrl: './project-reports.component.html',
  styleUrls: ['./project-reports.component.scss']
})

export class ProjectReportsComponent implements OnInit, OnDestroy {
  public alertChartOptions: any;
  public chartOptions: any;
  public donutChartOptions: any;
  public analysisChartOptions: any;
  screenHeight: number;
  chartSeries: any[] = [];
  industries: string[] = [];
  projects: string[] = [];
  subProjects: string[] = [];
  associationType: string | null = null;
  selectedIndustry: string | null = null;
  selectedProject: string | null = null;
  selectedSubProject: string | null = null;
  primaryPile: string | null = null;
  garbagePrimaryPile: string | null = null;
  secondaryPile: string | null = null;
  showPileAnalysis: boolean = false;
  currentIndex: number;

  allProjects: { [key: string]: string[] } = {}

  allSubProjects: { [key: string]: string[] } = {
    'Stock Allocation': ['Optimized Stock Allocation Report'],
    'Customer Analysis': ['Customer Segmentation Report'],
    'Mosquito Eradication': ['Mosquito Density Heatmap'],
    'Traffic Optimization': ['Traffic Congestion Heatmaps and Optimization Stategies'],
    'Vehicle Management': ['Vehicle Management'],
    'Patrolling Highways & Accident Support': ['Vehicle Monitoring'],
    'Garbage Pileups': ['Garbage Pileups'],
    'Water Logging & Green Cover Assessment': ['Green Cover Assessment'],
    'Land Encroachment': ['Encroachment'],
    'bondada BHEL solar': ['Asset Inventory & Monitoring', 'Panel Health Analysis', 'Vegetation Management'],
    'Wind Efficiency': ['Wind Turbines Report'],
    'Transmission Lines Health': ['Transmission Lines Fault Default Alerts'],
    'Volumetric Analysis': ['Daily Mine Volume Reports'],
    'Priya Cement': ['Day surveillance', 'Night Survelliance', 'Solar Panel Health', 'Haul Road Condition Monitoring', 'Mining Site Monitoring', 'ANPR'],
    'TG GENCO': ['Surveillance', 'Dump', 'Quary', 'Dump Volumetric Analysis', 'Haul Road Condition Monitoring'],
    'Ultra Tech': ['Site Overview', 'Industrial Overview', 'Residential Overview', 'Industrial Living Area', 'Industrial Volumetric Analysis', 'Industrial Waterbody Analysis', 'Industrial Garbage Analysis', 'Industrial Green Cover Analysis', 'Residential Household', 'Residential Garbage Analysis', 'Residential Green Cover Analysis'],
    'Haul Road Condition Monitoring': ['Haul Road Health Assessment Dashboard'],
    'Roads: Pothole Detection and Crack Analysis': ['Road Defect Map'],
    'Bridges: Structural Integrity and Crack Detection': ['Bridge Structural Health Report'],
    'Real Estate Monitoring': ['Monthly Project Progress Report'],
    'Progress Analysis for Large Scale Projects': ['Resource Utilization Insights'],
    'Green Cover Assessment': ['Mangrooves Health Index', 'Forest Health Index'],
    'Wildlife Tracking': ['Wildlife Movement Monitoring Dashboard'],
    'Flood Risk Assessment': ['Flood Prone Risk Map'],
    'Emergency Response Optimization': ['Rapid Water Spraying Fire Accidents', 'Facade Cleaning'],
    'Crowd Management during festivals, spiritual events and political or large gatherings': ['Crowd Density Heatmap and Management Strategies'],
    'VVIP Movement': ['Food & Medical Supplies', 'VVIP Movement'],
    '10x Zoom': ['10x Zoom'],
    'Day & Night': ['Day & Night'],
    'EHS': ['PPE Detection'],
    'VMC- Vijayawada': ['Encroached Land', 'Disaster Management', 'Logistics & Route Monitoring', 'Asset Monitoring', 'Completed Projects', 'Demolished Buildings', 'Critical Infrastructure Health'],
    'Hydraa - Fox Sagar Lake': ['Encroached Land', 'Industry Wastage', 'Digital Elevation Model', 'Digital surface model'],
    'Hydraa - Nala': ['Encroached Land', 'Flow Analysis', 'Digital Elevation Model', 'Digital surface model'],
    'Bhimavaram': ['City', 'Dumpyard Analysis', 'Lake Analysis', 'Mosquito Eradication', 'Road Health Analysis']
  };

  piles: string[] = ['Pile 1', 'Pile 2'];
  days: string[] = ['Day 1', 'Day 2'];
  garbagePiles: string[] = ['Pile 1', 'Pile 2', 'Pile 3', 'Pile 4']
  lakeDumps: any[] = [
    { id: 1, projected: '152.3214m²', fitted: '152.4097m²' },
    { id: 2, projected: '52.6643m²', fitted: '57.0531m²' },
    { id: 3, projected: '247.3591m²', fitted: '259.3736m²' }
  ];
  greenAreaData: any[] = [
    { id: 1, projected: '1369.1378 m²', fitted: '1367.6217 m²' },
    { id: 2, projected: '48.2141 m²', fitted: '48.2803 m²' },
    { id: 3, projected: '1526.8363 m²', fitted: '1523.884 m²' },
    { id: 4, projected: '262.5295 m²', fitted: '262.8486 m²' },
    { id: 5, projected: '119.4831 m²', fitted: '120.0053 m²' },
    { id: 6, projected: '95.248 m²', fitted: '96.4355 m²' },
    { id: 7, projected: '18.2115 m²', fitted: '19.0465 m²' },
    { id: 8, projected: '35.8985 m²', fitted: '36.1069 m²' },
    { id: 9, projected: '247.4761 m²', fitted: '247.3572 m²' },
    { id: 10, projected: '32.1656 m²', fitted: '32.1798 m²' },
    { id: 11, projected: '41.648 m²', fitted: '41.6161 m²' },
    { id: 12, projected: '373.3579 m²', fitted: '373.5988 m²' },
    { id: 13, projected: '32.2336 m²', fitted: '32.3343 m²' },
    { id: 14, projected: '13.3367 m²', fitted: '13.725 m²' },
    { id: 15, projected: '49.9224 m²', fitted: '50.2315 m²' },
    { id: 16, projected: '105.1792 m²', fitted: '105.2966 m²' },
    { id: 17, projected: '711.8513 m²', fitted: '712.1119 m²' },
    { id: 18, projected: '428.4373 m²', fitted: '428.6494 m²' },
    { id: 19, projected: '1369.1378 m²', fitted: '1367.6217 m²' },
    { id: 20, projected: '48.2141 m²', fitted: '48.2803 m²' },
    { id: 21, projected: '1526.8363 m²', fitted: '1523.8837 m²' },
    { id: 22, projected: '262.5295 m²', fitted: '262.8486 m²' },
    { id: 23, projected: '119.4831 m²', fitted: '120.0053 m²' },
    { id: 24, projected: '95.248 m²', fitted: '96.4355 m²' },
    { id: 25, projected: '18.2115 m²', fitted: '19.0465 m²' },
    { id: 26, projected: '35.8985 m²', fitted: '36.1069 m²' },
    { id: 27, projected: '247.4761 m²', fitted: '247.3572 m²' },
    { id: 28, projected: '32.1656 m²', fitted: '32.1798 m²' },
    { id: 29, projected: '41.648 m²', fitted: '41.6161 m²' },
    { id: 30, projected: '373.3579 m²', fitted: '373.5988 m²' },
    { id: 31, projected: '32.2336 m²', fitted: '32.3343 m²' },
    { id: 32, projected: '13.3367 m²', fitted: '13.725 m²' },
    { id: 33, projected: '49.9224 m²', fitted: '50.2315 m²' },
    { id: 34, projected: '105.1792 m²', fitted: '105.2966 m²' },
    { id: 35, projected: '711.8513 m²', fitted: '712.1119 m²' },
    { id: 36, projected: '1369.1378 m²', fitted: '1367.6217 m²' },
    { id: 37, projected: '48.2141 m²', fitted: '48.2803 m²' }
  ];
  greenAreaPoints: number[] = Array.from({ length: 37 }, (_, i) => i + 1);
  roadPatchData: any[] = [
    { id: 1, projected: '14.4178 m²', fitted: '14.3697 m²' },
    { id: 2, projected: '9.9943 m²', fitted: '9.9613 m²' },
    { id: 3, projected: '3.5394 m²', fitted: '3.5277 m²' },
    { id: 4, projected: '2.3115 m²', fitted: '2.306 m²' },
    { id: 5, projected: '1.7617 m²', fitted: '1.7567 m²' },
    { id: 6, projected: '11.5973 m²', fitted: '11.5674 m²' },
    { id: 7, projected: '21.8211 m²', fitted: '21.7888 m²' },
    { id: 8, projected: '2.1008 m²', fitted: '2.096 m²' },
    { id: 9, projected: '1.0966 m²', fitted: '1.0929 m²' },
    { id: 10, projected: '1.8428 m²', fitted: '1.8368 m²' },
    { id: 11, projected: '5.1504 m²', fitted: '5.1528 m²' }
  ];
  roadPatches: number[] = Array.from({ length: 11 }, (_, i) => i + 1);
  waterBodyData: any[] = [
    { id: 1, projected: '208.4434 m²', fitted: '207.7471 m²' },
    { id: 2, projected: '33.3936 m²', fitted: '33.2805 m²' },
    { id: 3, projected: '7.5923 m²', fitted: '7.5681 m²' }
  ];
  nonResidentialData: any[] = [
    { id: 1, projected: '6382.8424 m²', location: 'https://maps.app.goo.gl/GEwRGDeFWg8qCuJt5' },
    { id: 2, projected: '6899.8691 m²', location: 'https://maps.app.goo.gl/QpNf6n1uqF7646eV9' },
    { id: 3, projected: '4495.6461 m²', location: 'https://maps.app.goo.gl/Wj9R7Zu4XU3PDEFF9' },
    { id: 4, projected: '5485.0818 m²', location: 'https://maps.app.goo.gl/aqUpFnbbkBhavWCi6' },
    { id: 5, projected: '8695.1063 m²', location: 'https://maps.app.goo.gl/GJdx3ftzW3s8gjEK8' },
    { id: 6, projected: '9868.8747 m²', location: 'https://maps.app.goo.gl/rDwi34ck4WEwG1r46' },
    { id: 7, projected: '15405.0002 m²', location: 'https://maps.app.goo.gl/drmnXsMSfF9Tpxmz9' },
    { id: 8, projected: '6795.7609 m²', location: 'https://maps.app.goo.gl/EYBn6ULBjqnb8QB46' },
    { id: 9, projected: '4323.4758 m²', location: 'https://maps.app.goo.gl/sbxWSmcRgnMKneni8' },
    { id: 10, projected: '20611.1443 m²', location: 'https://maps.app.goo.gl/U8r538E7svJ69bTU6' }
  ];
  agricultureLandData: any[] = [
    { id: 1, area: '26074.8741 m²', location: 'https://maps.app.goo.gl/Tu6yijGUpWLJ4HKJ8' },
    { id: 2, area: '7.5923 m²', location: 'https://maps.app.goo.gl/fsxnkr36L68bhXHJ8' }
  ];

  constructor() {
    this.screenHeight = (window.innerHeight / 2) - 45;
    this.currentIndex = 0;
    this.associationType = localStorage.getItem('association_type');
    this.performPrefetchActivity(this.associationType);
  }

  ngOnInit(): void {
  }

  performPrefetchActivity = (associationType: any) => {
    const pIndustry = localStorage.getItem('prefetch_industry');
    const pProject = localStorage.getItem('prefetch_project');
    const pSubProject = localStorage.getItem('prefetch_subproject');
    if (pIndustry !== undefined && pIndustry !== null && pProject !== undefined && pProject !== null && pSubProject !== undefined && pSubProject !== null) {
      this.selectedIndustry = pIndustry;
      this.selectedProject = pProject;
      this.selectedSubProject = pSubProject;
      this.displayIndustries(this.associationType);
      this.projects = this.allProjects[this.selectedIndustry];
      this.subProjects = this.allSubProjects[this.selectedProject];
      if (this.selectedProject === 'Hydraa - Fox Sagar Lake' && this.selectedSubProject === 'Garbage Pileups') {
        this.selectedSubProject = null;
        localStorage.removeItem('selected_project');
      }
    } else {
      this.displayIndustries(this.associationType);
      localStorage.removeItem('selected_project');
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('prefetch_industry');
    localStorage.removeItem('prefetch_project');
    localStorage.removeItem('prefetch_subproject');
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
      this.industries = ['Inventory Management', 'Retail Analytics', 'Smart City', 'Energy & Utilities', 'Mining', 'Infrastructure', 'Construction Analytics',
        'Forest & Environment', 'Disaster Management', 'Surveillance'];
      this.allProjects = {
        'Inventory Management': ['Stock Allocation'],
        'Retail Analytics': ['Customer Analysis'],
        'Smart City': ['Mosquito Eradication', 'Traffic Optimization', 'Vehicle Management', 'Patrolling Highways & Accident Support', 'Garbage Pileups', 'Water Logging & Green Cover Assessment', 'Land Encroachment', 'VMC- Vijayawada', 'Hydraa - Fox Sagar Lake', 'Hydraa - Nala', 'Bhimavaram'],
        'Energy & Utilities': ['bondada BHEL solar', 'Wind Efficiency', 'Transmission Lines Health'],
        'Mining': ['Priya Cement', 'Volumetric Analysis', 'Haul Road Condition Monitoring', 'Ultra Tech', 'TG GENCO'],
        'Infrastructure': ['Roads: Pothole Detection and Crack Analysis', 'Bridges: Structural Integrity and Crack Detection'],
        'Construction Analytics': ['Real Estate Monitoring', 'Progress Analysis for Large Scale Projects'],
        'Forest & Environment': ['Green Cover Assessment', 'Wildlife Tracking'],
        'Disaster Management': ['Flood Risk Assessment', 'Emergency Response Optimization', 'Crowd Management during festivals, spiritual events and political or large gatherings', 'VVIP Movement'],
        'Surveillance': ['10x Zoom', 'Day & Night', 'EHS']
      };
    } else if (this.associationType === 'admin') {
      this.industries = ['Inventory Management', 'Retail Analytics', 'Smart City', 'Energy & Utilities', 'Mining', 'Infrastructure', 'Construction Analytics',
        'Forest & Environment', 'Disaster Management', 'Surveillance'];
      this.allProjects = {
        'Inventory Management': ['Stock Allocation'],
        'Retail Analytics': ['Customer Analysis'],
        'Smart City': ['Mosquito Eradication', 'Traffic Optimization', 'Vehicle Management', 'Patrolling Highways & Accident Support', 'Garbage Pileups', 'Water Logging & Green Cover Assessment', 'Land Encroachment', 'VMC- Vijayawada', 'Hydraa - Fox Sagar Lake', 'Hydraa - Nala', 'Bhimavaram'],
        'Energy & Utilities': ['bondada BHEL solar', 'Wind Efficiency', 'Transmission Lines Health'],
        'Mining': ['Priya Cement', 'Volumetric Analysis', 'Haul Road Condition Monitoring', 'Ultra Tech', 'TG GENCO'],
        'Infrastructure': ['Roads: Pothole Detection and Crack Analysis', 'Bridges: Structural Integrity and Crack Detection'],
        'Construction Analytics': ['Real Estate Monitoring', 'Progress Analysis for Large Scale Projects'],
        'Forest & Environment': ['Green Cover Assessment', 'Wildlife Tracking'],
        'Disaster Management': ['Flood Risk Assessment', 'Emergency Response Optimization', 'Crowd Management during festivals, spiritual events and political or large gatherings', 'VVIP Movement'],
        'Surveillance': ['10x Zoom', 'Day & Night', 'EHS']
      };
    }
  }

  onIndustryChange(event: Event): void {
    if (this.selectedIndustry) {
      console.log(`Selected Project --> ${this.selectedIndustry}`);
      this.projects = this.allProjects[this.selectedIndustry] || [];
    } else {
      this.projects = [];
    }
    this.subProjects = [];
    this.selectedProject = null;
    this.selectedSubProject = null;
    localStorage.removeItem('selected_project');
  }

  onProjectChange(event: Event): void {
    if (this.selectedProject) {
      console.log(`Selected Project --> ${this.selectedProject}`);
      this.subProjects = this.allSubProjects[this.selectedProject] || [];
    } else {
      this.subProjects = [];
    }
    this.selectedSubProject = null;
    localStorage.removeItem('selected_project');
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Volumetric_Report.pdf';
    link.download = 'Volumetric_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadTLFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Transmission_Lines_Report.pdf';
    link.download = 'Transmission_Lines_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadMangrooveFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Mangroves+Stressed+Vegetation_Report.pdf';
    link.download = 'Mangroves Stressed Vegetation_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadbhelFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/BHEL_solar_report.pdf';
    link.download = 'BHEL_solar_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadGarbageFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Garbage_Report.pdf';
    link.download = 'Garbage_Pileup_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadHydraaFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/hydraa_report.pdf';
    link.download = 'hydraa_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadpriyacementFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Priya_Cement_Solar_Report.pdf';
    link.download = 'Priya_Cement_Solar_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadHydraanalaFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/hydraa_nala_report.pdf';
    link.download = 'hydraa_nala_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadMosquitoFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Mosquito_Report.pdf';
    link.download = 'Mosquito_Analysis_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadRoadFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Road_Report.pdf';
    link.download = 'Road_Analysis_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramDumpyardReport() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Bhimavaram+-+Dumpyard+Report.pdf';
    link.download = 'Bhimavaram_Dumpyard_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramLakeReport() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Bhimavaram+-+Lake+Report+.pdf';
    link.download = 'Bhimavaram_Lake_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramMosquitoReport() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Bhimavaram+-+Mosquito+Pond+Report.pdf';
    link.download = 'Bhimavaram_Mosquito_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramNREReport() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Bhimavaram+-+Dumpyard+Report.pdf';
    link.download = 'Bhimavaram_NRE_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramAgriReport() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Bhimavaram+-+Dumpyard+Report.pdf';
    link.download = 'Bhimavaram_Agriculture_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramCityReport() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Bhimavaram - City Report.pdf';
    link.download = 'Bhimavaram_City_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramRoadReport() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Bhimavaram+-+Dumpyard+Report.pdf';
    link.download = 'Bhimavaram_Road_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadBhimavaramWaterBodyReport() {
    const link = document.createElement('a');
    link.href = '../../../assets/outputs/bhimavaram_waterbody_report.pdf';
    link.download = 'Bhimavaram_WaterBody_Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadEncroachmentFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/dom_screennail.png'
    link.download = 'Encroachment_Report.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadTGGENCODumpFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Mining_Dump_Report-AA_%26_TGGENCO.pdf'
    link.download = 'Mining_Dump_Report-AA_&_TGGENCO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadTGGENCOQuaryFile() {
    const link = document.createElement('a');
    link.href = 'https://old-platform-buckets.s3.ap-south-2.amazonaws.com/Mining_Quary_Report-AA_%26_TGGENCO.pdf'
    link.download = 'Mining_Quary_Report-AA_&_TGGENCO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  createPileAnalysis(event: Event): void {
    this.showPileAnalysis = true;
  }

  renderSlideView = () => {
    const value = (this.selectedProject !== null) ? this.selectedProject.toLowerCase() : '';
    localStorage.setItem('selected_project', value);
    if (this.selectedProject === 'Mines' && this.selectedSubProject === 'Perimeter Survelliance') {
      this.showSlide(this.currentIndex);
    } else {
      console.log('No Carousel Rendering');
    }
  }

  showSlide(index: number): void {
    const slides = document.querySelectorAll('.carousel-inner');
    let visibleItems: HTMLElement[] = []; // Initialize as an empty array of HTMLElements

    // Iterate over each .carousel-inner and collect all .carousel-item elements
    slides.forEach((slide) => {
      // Collect carousel items inside each carousel-inner
      const items = Array.from(slide.querySelectorAll('.carousel-item')) as HTMLElement[];
      visibleItems = [];
      visibleItems.push(...items); // Add all items to the visibleItems array
    });

    const totalSlides = visibleItems.length;

    // Ensure the index is within bounds
    if (index >= totalSlides) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = totalSlides - 1;
    } else {
      this.currentIndex = index;
    }

    // Hide all slides
    visibleItems.forEach((slide) => {
      slide.classList.remove('active');
    });

    // Show the current slide
    visibleItems[this.currentIndex].classList.add('active');
  }


  nextSlide() {
    this.showSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.showSlide(this.currentIndex - 1);
  }

}
