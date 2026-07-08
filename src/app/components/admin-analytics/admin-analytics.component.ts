import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { SharedService } from 'src/app/services/sharedService/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-analytics',
  templateUrl: './admin-analytics.component.html',
  styleUrls: ['./admin-analytics.component.scss']
})
export class AdminAnalyticsComponent implements OnInit, AfterViewInit {
  public alertChartOptions: any;
  public chartOptions: any;
  public donutChartOptions: any;
  public analysisChartOptions: any;
  chartSeries: any[] = [];
  public alertsCount: number;
  public uploadsCount: number;
  currentUser: string | null = null;
  associationType: string | null = null;
  screenHeight: number;
  selectedProject: string | null = null;

  constructor(
    private uploadDialog: MatDialog,
    private sharedService: SharedService,
  ) {
    this.screenHeight = (window.innerHeight / 2) + 15;
    this.currentUser = localStorage.getItem('username');
    this.associationType = localStorage.getItem('association_type');
    this.alertsCount = (this.currentUser === 'admin') ? 0 : 2;
    this.uploadsCount = 0;
    this.sharedService.updateAnalyticsData$.subscribe(() => {
      this.alertsCount = 2;
      this.uploadsCount = 1;
    });
    this.selectedProject = (localStorage.getItem('selected_project') !== undefined && localStorage.getItem('selected_project') !== null) ? localStorage.getItem('selected_project') : null;
  }

  ngOnInit(): void {
    console.log('Analytics');
    this.renderCharts();
  }

  ngAfterViewInit(): void {
  }


  renderCharts = () => {
    console.log(`Association Type --> ${this.associationType} and Selected Type --> ${this.selectedProject}`);
    if (this.associationType === 'mines' || (((this.associationType === 'akin' || this.associationType === 'admin') || this.associationType === 'admin') && this.selectedProject === 'volumetric analysis')) {
      this.renderMinesCharts();
    } else if (this.associationType === 'roads' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'roads: pothole detection and crack analysis')) {
      this.renderRoadsCharts();
    } else if (this.associationType === 'solar' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'bhel Solar')) {
      this.renderSolarCharts();
    } else if (this.associationType === 'wind' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'wind efficiency')) {
      this.renderWindCharts();
    } else if (this.associationType === 'transmission_lines' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'transmission lines health')) {
      this.renderTransmissionCharts();
    } else if (this.associationType === 'forest_tree_monitoring' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'forest tree monitoring')) {
      this.renderForestMonitoringCharts();
    } else if (this.associationType === 'afforestation' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'afforestation')) {
      this.renderAfforestationCharts();
    } else if (this.associationType === 'wildlife_tracking' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'wildlife tracking')) {
      this.renderWildlifeTrackingCharts();
    } else if (this.associationType === 'wildfire_detection' || ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'wildfire detection')) {
      this.renderWildFireTrackingCharts();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'automobiles') {
      this.renderAkinCharts();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'stock allocation') {
      this.renderInventoryCharts();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'progress analysis for large scale projects') {
      this.renderPolavaramCharts();
    } else {
      console.log('Selected Project has no Dashborad');
    }
  }

  renderMinesCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Perimeter Surveillance (Weekly)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['29-04-2024', '06-05-2024', '13-05-2024', '20-05-2024', '21-05-2024'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "People Count",
        data: [359, 424, 437, 404, 258]
      },
      {
        name: "Vehicle Count",
        data: [465, 901, 838, 814, 625]
      },
      {
        name: "Illegal Count",
        data: [6, 6, 8, 8, 10]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Stock Fill (Monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Stock Fill Volume (m3)'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Coal',
        data: [5, 4, 10, 6, 8, 11, 6, 14, 19, 6, 5, 9]
      },
      {
        name: 'Limestone',
        data: [8, 3, 15, 8, 10, 15, 4, 18, 25, 9, 9, 12]
      }],
    };
  }

  renderRoadsCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Road Defects (Every 3 Months)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Cracks",
        data: [26, 38, 34, 32]
      },
      {
        name: "Pot Holes",
        data: [32, 44, 39, 49]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Road Defects (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Number of Defects'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Cracks',
        data: [6, 12, 8, 7, 18, 13, 7, 11, 16, 9, 12, 11]
      },
      {
        name: 'Pot Holes',
        data: [7, 13, 12, 20, 5, 19, 15, 9, 15, 16, 14, 19]
      }],
    };
  }

  renderSolarCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Solar Defects (Every 3 Months)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Bypass Diode",
        data: [41, 84, 83, 66]
      },
      {
        name: "Hotspots",
        data: [49, 71, 72, 55]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Solar Defects (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Number of Defects'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Bypass Diodes',
        data: [17, 25, 22, 25, 11, 12, 26, 8, 24, 40, 21, 32]
      },
      {
        name: 'Hotspots',
        data: [9, 32, 26, 21, 21, 21, 12, 24, 23, 25, 19, 16]
      }],
    };
  }

  renderWindCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Wind Turbine Defects (Every 3 Months)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Lightning Strike",
        data: [40, 46, 56, 30]
      },
      {
        name: "Paint Damage",
        data: [34, 31, 22, 54]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Wind Turbine Defects (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Number of Defects'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Lightning Strike',
        data: [12, 14, 20, 14, 11, 15, 16, 21, 19, 5, 7, 18]
      },
      {
        name: 'Paint Damage',
        data: [14, 6, 11, 10, 8, 16, 10, , 12, 17, 18, 19]
      }],
    };
  }

  renderTransmissionCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Transmission Lines Defects (Every 3 Months)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Leaks",
        data: [84, 47, 73, 86]
      },
      {
        name: "Pole Health",
        data: [72, 63, 88, 72]
      },
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Transmission Lines Defects (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Number of Defects'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Leaks',
        data: [20, 36, 28, 16, 16, 15, 33, 25, 15, 24, 35, 27]
      }, {
        name: 'Pole Health',
        data: [30, 21, 21, 18, 36, 9, 29, 30, 29, 23, 21, 28]
      }],
    };
  }

  renderForestMonitoringCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Area Covered (Sq.KM) Monthly',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Area Covered (Sq.KM)",
        data: [53, 110, 116, 88, 109, 149, 50, 108, 121, 135, 144, 160]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Trees Count (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Number of Defects'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Trees Count',
        data: [1071, 1253, 534, 1056, 1833, 1466, 1834, 1189, 818, 1010, 1289, 1103]
      }],
    };
  }

  renderAfforestationCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Seed Sapling & Area Covered (Sq.KM) Monthly',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Area Covered (Sq.KM)",
        data: [101, 130, 171, 155, 133, 106, 95, 67, 87, 174, 127, 102]
      },
      {
        name: "Seed Sapling",
        data: [1029, 656, 1237, 1358, 1190, 1309, 753, 1133, 917, 981, 737, 1850]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Seed Saplings (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Saplings Count'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Seed Planting',
        data: [1029, 656, 1237, 1358, 1190, 1309, 753, 1133, 917, 981, 737, 1850]
      }],
    };
  }

  renderWildlifeTrackingCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Animals Count (Every 3 Months)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Animals Count",
        data: [3387, 3432, 2061, 3802]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Animals Count & Area Covered Sq.KM (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Number of Defects'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Animals Count',
        data: [903, 695, 1789, 1418, 1475, 539, 601, 326, 1134, 1066, 1557, 1179]
      },
      {
        name: 'Area Covered (Sq.KM)',
        data: [68, 112, 79, 192, 191, 115, 100, 160, 119, 126, 134, 167]
      }],
    };
  }

  renderWildFireTrackingCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Area Covered (Every 3 Months)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Area Covered (Sq.KM)",
        data: [434, 276, 307, 315]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: '400'
      },
      title: {
        text: 'Area Covered Sq.KM (monthly)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year 2024'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Number of Defects'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: 'Area Covered (Sq.KM)',
          data: [125, 169, 140, 67, 105, 104, 133, 121, 53, 112, 103, 100]
        }],
    };
  }

  renderAkinCharts = () => {
    this.chartOptions = {
      chart: {
        type: 'area',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: this.screenHeight,
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Number of Visitors (Monthly)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Visitors Count'
        },
      },
      theme: {
        mode: 'dark'
      }
    };

    this.chartSeries = [
      {
        name: "Visitors Count",
        data: [121, 74, 86, 110, 109, 124, 61, 75, 111, 59, 101, 114]
      }
    ];

    this.donutChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        height: this.screenHeight,
      },
      title: {
        text: 'Average Sentiment Score (Daily)',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Day (_/7/2024)'
        },
        type: 'category',
        categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      },
      yaxis: {
        title: {
          text: 'Score'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: 'Score',
          data: [46, 56, 34, 58, 50, 49, 44, 52, 54, 59, 45, 56, 71, 42, 33, 45]
        }],
    };

    this.alertChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Number of Visitors by Age Group',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Monthly'
        },
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Count of Visitors'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: '18-40',
        data: [27, 28, 20, 33, 45, 60, 18, 21, 58, 21, 28, 41]
      }, {
        name: '40-60',
        data: [59, 21, 55, 45, 53, 11, 21, 21, 26, 28, 52, 49]
      }, {
        name: '60-70',
        data: [35, 25, 11, 32, 11, 53, 22, 33, 27, 10, 21, 24]
      }],
    };

    this.analysisChartOptions = {
      series: [60, 10, 30],
      labels: ['Positive', 'Neutral', 'Negative'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#00c87b', '#ff6600', '#dc143c'],
      title: {
        text: 'Sentiment Distribution (in %)',
        align: 'center',
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      theme: {
        mode: 'dark'
      }
    };
  }

  renderInventoryCharts = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Andhra Pradesh Food & Civil Supplies',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Districts of Andhra Pradesh'
        },
        type: 'category',
        categories: ['SKLM', 'VZM', 'VSKP', 'EG', 'WG', 'KRI', 'GNT', 'PRKM', 'KRNL', 'KDP', 'NLR', 'CTR', 'ATR'],
      },
      yaxis: {
        title: {
          text: 'Civil Supplies QTY (in Tons)'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Rice',
        data: [30, 28, 20, 33, 45, 60, 18, 21, 58, 21, 28, 41, 21]
      }, {
        name: 'Wheat',
        data: [59, 21, 55, 45, 53, 11, 21, 21, 26, 28, 52, 49, 53]
      }, {
        name: 'Sugar',
        data: [35, 25, 11, 32, 11, 53, 22, 33, 27, 10, 21, 24, 84]
      }],
    };

    this.analysisChartOptions = {
      series: [45, 20, 15, 20],
      labels: ['Rice', 'Wheat', 'Sugar', 'Dals'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#00c87b', '#ff6600', '#dc143c'],
      title: {
        text: 'State Stock Ditribution (in %)',
        align: 'center',
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      theme: {
        mode: 'dark'
      }
    };
  }

  renderPolavaramCharts = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        foreColor: "#ccc",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Budget & Work Progress',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Year'
        },
        type: 'category',
        categories: ['2004-2014', '2015-2019', '2019-2024'],
      },
      yaxis: {
        title: {
          text: 'Cumulative Work Progress'
        },
      },
      colors: ['#0eff00', '#e4d00a', '#c80000'],
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Budget in Thousand Crores',
        data: [12, 35, 55]
      }, {
        name: 'Duration in years',
        data: [10, 5, 5]
      }, {
        name: 'Work Progress %',
        data: [25, 30, 20]
      }],
    };

    this.analysisChartOptions = {
      series: [50, 21, 29],
      labels: ['Transstroy (2013-2017)', 'Navayuga (2017-2019)', 'Megha Engineering (2019-2024)'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#a30000', '#0035d1', '#fc0802'],
      title: {
        text: 'Company and Progress',
        align: 'center',
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      theme: {
        mode: 'dark'
      }
    };
  }


  openUploadFileDialog() {
    const dialogRef = this.uploadDialog.open(UploadFilesComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log('Employee Dialog Closed');
        }
      },
    });
  }

  changeMenuType = (value: string): void => {
    this.sharedService.changeHomeMenuSubject.next(value);
  }

  showProjectAnalytics = (value: string) => {
    if (value === 'roads') {
      localStorage.setItem('prefetch_industry', 'Infrastructure');
      localStorage.setItem('prefetch_project', 'Roads: Pothole Detection and Crack Analysis');
      localStorage.setItem('prefetch_subproject', 'Road Defect Map');
      this.sharedService.changeHomeMenuSubject.next('reports');
    } else if (value === 'mosquito') {
      localStorage.setItem('prefetch_industry', 'Smart City Living');
      localStorage.setItem('prefetch_project', 'Mosquito Eradication');
      localStorage.setItem('prefetch_subproject', 'Mosquito Density Heatmap');
      this.sharedService.changeHomeMenuSubject.next('reports');
    } else if (value === 'garbage') {
      localStorage.setItem('prefetch_industry', 'Smart City Living');
      localStorage.setItem('prefetch_project', 'Garbage Pileups');
      localStorage.setItem('prefetch_subproject', 'Garbage Pileups');
      this.sharedService.changeHomeMenuSubject.next('reports');
    } else if (value === 'mines') {
      localStorage.setItem('prefetch_industry', 'Mining');
      localStorage.setItem('prefetch_project', 'Volumetric Analysis');
      localStorage.setItem('prefetch_subproject', 'Daily Mine Volume Reports');
      this.sharedService.changeHomeMenuSubject.next('reports');
    } else if (value === 'energy') {
      localStorage.setItem('prefetch_industry', 'Energy & Utilities');
      localStorage.setItem('prefetch_project', 'BHEL Solar');
      localStorage.setItem('prefetch_subproject', 'Solar Panel Performance Report');
      this.sharedService.changeHomeMenuSubject.next('reports');
    } else {
      localStorage.setItem('prefetch_industry', 'Construction Analytics');
      localStorage.setItem('prefetch_project', 'Progress Analysis for Large Scale Projects');
      localStorage.setItem('prefetch_subproject', 'Resource Utilization Insights');
      this.sharedService.changeHomeMenuSubject.next('reports');
    }
  }

}
