import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-analytics',
  templateUrl: './project-analytics.component.html',
  styleUrls: ['./project-analytics.component.scss']

})
export class ProjectAnalyticsComponent implements OnInit {
  public alertChartOptions: any;
  public analysisChartOptions: any;
  public chartOptions: any;
  public verticalChartOptions: any;
  screenHeight: number;
  associationType: string | null = null;
  selectedProject: string | null = null;

  constructor() {
    this.screenHeight = (window.innerHeight / 2) - 60;
    this.associationType = localStorage.getItem('association_type');
    this.selectedProject = (localStorage.getItem('selected_project') !== undefined && localStorage.getItem('selected_project') !== null) ? localStorage.getItem('selected_project') : null;
  }

  ngOnInit(): void {
    this.renderAnalyticsCharts();
  }

  renderAnalyticsCharts = () => {
    console.log(`Association Type --> ${this.associationType} and Selected Type --> ${this.selectedProject}`);
    if (this.associationType === 'mines' || (this.associationType === 'akin' && this.selectedProject === 'volumetric analysis') || (this.associationType === 'admin' && this.selectedProject === 'volumetric analysis')) {
      console.log('Rendering Mines');
      this.renderAnalyticsMinesCharts();
    } else if (this.associationType === 'roads' || (this.associationType === 'akin' && this.selectedProject === 'roads: pothole detection and crack analysis') || (this.associationType === 'admin' && this.selectedProject === 'roads: pothole detection and crack analysis')) {
      console.log('Roads');
      this.renderAnalyticsRoadCharts();
    } else if (this.associationType === 'solar' || (this.associationType === 'akin' && this.selectedProject === 'bondada bhel solar') || (this.associationType === 'admin' && this.selectedProject === 'bondada bhel solar')) {
      console.log('Solar');
      this.renderAnalyticsbhelSolarCharts();
    } else if (this.associationType === 'wind' || (this.associationType === 'akin' && this.selectedProject === 'wind efficiency') || (this.associationType === 'admin' && this.selectedProject === 'wind efficiency')) {
      console.log('Wind');
      this.renderAnalyticsWindCharts();
    } else if (this.associationType === 'transmission_lines' || (this.associationType === 'akin' && this.selectedProject === 'transmission lines health') || (this.associationType === 'admin' && this.selectedProject === 'transmission lines health')) {
      console.log('Transmission Lines');
      this.renderAnalyticsTransmissionCharts();
    } else if (this.associationType === 'forest_tree_monitoring' || (this.associationType === 'akin' && this.selectedProject === 'forest tree monitoring') || (this.associationType === 'admin' && this.selectedProject === 'forest tree monitoring')) {
      console.log('Forest Tree Monitoring');
      this.renderAnalyticsForestMonitoringCharts();
    } else if (this.associationType === 'afforestation' || (this.associationType === 'akin' && this.selectedProject === 'afforestation') || (this.associationType === 'admin' && this.selectedProject === 'afforestation')) {
      console.log('Afforestation');
      this.renderAnalyticsAfforestationCharts();
    } else if (this.associationType === 'wildlife_tracking' || (this.associationType === 'akin' && this.selectedProject === 'wildlife tracking') || (this.associationType === 'admin' && this.selectedProject === 'wildlife tracking')) {
      console.log('Wildlife Tracking');
      this.renderAnalyticsWildlifeTrackingCharts();
    } else if (this.associationType === 'wildfire_detection' || (this.associationType === 'akin' && this.selectedProject === 'wildfire detection') || (this.associationType === 'admin' && this.selectedProject === 'wildfire detection')) {
      console.log('Wildlife Detection');
      this.renderAnalyticsWildfireTrackingCharts();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'automobiles') {
      console.log('Automobiles');
      this.renderAkinAnalyticsCharts();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'stock allocation') {
      console.log('Inventory Management');
      this.renderInventoryManagementCharts();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'progress analysis for large scale projects') {
      console.log('Polavaram');
      this.renderPolavaramCharts();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'mosquito eradication') {
      console.log('Mosquito Eradication');
      this.renderMosquitoEradication();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'garbage pileups') {
      console.log('Garbage Pileups');
      this.renderGarbagePileup();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'hydraa - vijayawada') {
      console.log('Hydraa V');
      this.renderhydraavijayawadaPileup();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'hydraa - fox sagar lake') {
      console.log('Hydraa Lake');
      this.renderhydraalakePileup();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'hydraa - nala') {
      console.log('Hydraa Nala');
      this.renderhydraanala();
    } else if ((this.associationType === 'akin' || this.associationType === 'admin') && this.selectedProject === 'bhimavaram') {
      console.log('Bhimavaram');
      this.renderBhimavaramAnalyticsCharts();
    } else {
      console.log(`Selected Project ${this.selectedProject} has no Dashborad`);
    }
  }

  renderAnalyticsMinesCharts = () => {
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
        text: 'Alerts',
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
          text: 'Alerts per month'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Alerts',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 80, 40, 110]
      }],
    };

    this.analysisChartOptions = {
      series: [103, 136],
      labels: ['Coal', 'Limestone'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Yearly Total Stock Pile Count',
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
      title: {
        text: 'Perimeter Surveillance (Daily)',
        align: 'center'
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
        type: 'category',
        categories: ['29-04-2024', '30-04-2024', '01-05-2024', '02-05-2024', '03-05-2024', '04-05-2024', '05-05-2024', '06-05-2024', '07-05-2024', '08-05-2024', '09-05-2024', '10-05-2024', '11-05-2024', '12-05-2024', '13-05-2024', '14-05-2024', '15-05-2024', '16-05-2024', '17-05-2024', '18-05-2024', '19-05-2024', '20-05-2024', '21-05-2024', '22-05-2024', '23-05-2024', '24-05-2024', '25-05-2024', '26-05-2024'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "People Count",
          data: [83, 27, 32, 31, 74, 61, 51, 83, 27, 53, 65, 46, 68, 82, 83, 76, 32, 97, 24, 98, 27, 72, 40, 48, 90, 20, 34, 100]
        },
        {
          name: "Vehicle Count",
          data: [67, 112, 45, 49, 85, 50, 57, 67, 112, 175, 114, 94, 163, 176, 150, 171, 108, 162, 132, 92, 23, 148, 23, 197, 119, 113, 48, 166]
        },
        {
          name: "Illegal Count",
          data: [0, 0, 2, 1, 3, 0, 0, 0, 0, 2, 0, 0, 4, 0, 1, 0, 5, 0, 0, 2, 0, 5, 0, 1, 0, 0, 0, 2]
        }
      ]
    };
  }

  renderAnalyticsSolarCharts = () => {
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
          text: 'Defects per month 2024'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Bypass Diode',
        data: [17, 25, 22, 25, 11, 12, 26, 8, 24, 40, 21, 32]
      }, {
        name: 'Hotspots',
        data: [9, 32, 26, 21, 21, 21, 12, 24, 23, 25, 19, 16]
      }],
    };

    this.analysisChartOptions = {
      series: [263, 249],
      labels: ['Bypass Diode', 'Hotspots'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Yearly Total Solar Defects',
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
      title: {
        text: 'Solar Defects (Every 3 Months)',
        align: 'center'
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
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Bypass Diode",
          data: [41, 84, 83, 66]
        },
        {
          name: "Hotspots",
          data: [49, 71, 72, 55]
        },
      ]
    };
  }
  renderAnalyticsbhelSolarCharts = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        // stacked: true, // Remove stacked if you want individual colors per bar for 'Defects Count'
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      // For different colors for each bar, set distributed: true in plotOptions.bar
      // And then define colors in the `colors` array, matching the number of bars/categories.
      colors: [
        '#FF4560', // Glass Breakage
        '#00E396', // Bypass diode
        '#FEB019', // Hotspots
        '#775DD0'  // Creepers
      ],
      title: {
        text: 'Defects Summary',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          distributed: true, // <--- ADDED for individual bar colors
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
          text: 'Defects'
        },
        type: 'category',
        categories: ['Glass Breakage', 'Bypass diode', 'Hotspots', 'Creepers'],
      },
      yaxis: {
        title: {
          text: 'No of defects / Severity Score'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: "Defects Count",
        data: [22, 3, 10, 1]
      }],
    };

    this.analysisChartOptions = {
      series: [26, 64],
      labels: ['Total Energy Loss', 'Total Usable Energy'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#1f77b4', '#ff7f0e'],
      title: {
        text: 'Energy Loss Summary',
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

    this.chartOptions = {
      chart: {
        type: 'scatter',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#f30405',
        '#ff9f06',
        '#038301'
      ],
      title: {
        text: 'Defect Severity',
        align: 'center',
      },
      plotOptions: {},
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'No of Days'
        },
        tickAmount: 5,
      },
      yaxis: {
        title: {
          text: 'Count'
        },
        tickAmount: 5,
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'High Severity Defects',
        data: [
          [0, 2],
          [2, 4],
          [4, 3],
          [6, 10],
          [8, 3]
        ],
      }, {
        name: 'Moderate Severity Defects',
        data: [
          [10, 2],
          [12, 2],
          [14, 1],
          [16, 5],
          [18, 1]
        ],
      }, {
        name: 'Low Severity Defects',
        data: [
          [20, 0],
          [22, 0],
          [22.5, 1],
          [26, 0],
          [27, 0]
        ],
      }]
    };

    this.verticalChartOptions = {
      chart: {
        type: 'line',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#fda405',
        '#80017e'
      ],
      title: {
        text: 'Cost Loss Summary',
        align: 'center',
      },
      plotOptions: {},
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: number | string) { // <--- FIXED: Explicitly typed 'val' as number | string
          if (typeof val === 'number') {
            return val.toFixed(2);
          }
          return String(val); // Ensure it's a string for display
        }
      },
      xaxis: {
        title: {
          text: 'Loss Type'
        },
        categories: ['Daily Loss', 'Annual Loss'],
        labels: {
            formatter: function(val: string) { // <--- FIXED: Explicitly typed 'val' as string
                if (val === 'Daily Loss') return 'Daily (Rs)';
                if (val === 'Annual Loss') return 'Annual (Rs. in Lakhs)';
                return val;
            }
        }
      },
      yaxis: {
        title: {
          text: 'Amount (Rs)'
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Daily Price Generation Loss (in Thousands INR)',
        data: [11.35, 0]
      }, {
        name: 'Annual Price Generation Loss (in Lakhs INR)',
        data: [0, 4145998.5 / 100000]
      }],
    };
  }
  
  renderAnalyticsWindCharts = () => {
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
        text: 'Wind Defects (monthly)',
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
          text: 'Defects per month 2024'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Lightning Strike',
        data: [12, 14, 20, 14, 11, 15, 16, 21, 19, 5, 7, 18]
      }, {
        name: 'Paint Damage',
        data: [14, 6, 11, 10, 8, 16, 10, 32, 12, 17, 18, 19]
      }],
    };

    this.analysisChartOptions = {
      series: [172, 141],
      labels: ['Lightning Strike', 'Paint Damage'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Yearly Total Wind Turbine Defects',
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
      title: {
        text: 'Wind Turbine Defects (Every 3 Months)',
        align: 'center'
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
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Lightning Strike",
          data: [40, 46, 56, 30]
        },
        {
          name: "Paint Damage",
          data: [34, 31, 22, 54]
        },
      ]
    };
  }

  renderAnalyticsTransmissionCharts = () => {
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
        text: 'Transmission Lines Defects (Monthly)',
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
          text: 'Defects per month 2024'
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

    this.analysisChartOptions = {
      series: [290, 295],
      labels: ['Leaks', 'Pole Health'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Yearly Total Transmission Lines Defects',
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
      title: {
        text: 'Transmission Lines Defects (Every 3 Months)',
        align: 'center'
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
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Leaks",
          data: [84, 47, 73, 86]
        },
        {
          name: "Pole Health",
          data: [72, 63, 88, 72]
        },
      ]
    };
  }

  renderAnalyticsForestMonitoringCharts = () => {
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
        text: 'Trees & Area Covered Sq.KM (Monthly)',
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
          text: 'Defects per month 2024'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Count of Trees',
        data: [1071, 1253, 534, 1056, 1833, 1466, 1834, 1189, 818, 1010, 1289, 1103]
      }, {
        name: 'Area Covered (Sq.KM)',
        data: [53, 110, 116, 88, 109, 149, 50, 108, 121, 135, 144, 160]
      }],
    };

    this.analysisChartOptions = {
      series: [4355, 2858, 3841, 3402],
      labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Tree Count (Every 3 Months)',
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
      title: {
        text: 'Area Covered (Sq.KM)',
        align: 'center'
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
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Area (Sq.KM)",
          data: [53, 110, 116, 88, 109, 149, 50, 108, 121, 135, 144, 160]
        }
      ]
    };
  }

  renderAnalyticsAfforestationCharts = () => {
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
        text: 'Seed Planning (Monthly)',
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
          text: 'Seed Planting per month'
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

    this.analysisChartOptions = {
      series: [2922, 3857, 2803, 3568],
      labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Seed Planting (Every 3 Months)',
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
      title: {
        text: 'Area Covered (Sq.KM)',
        align: 'center'
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
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Area (Sq.KM)",
          data: [101, 130, 171, 155, 133, 106, 95, 67, 87, 174, 127, 102]
        }
      ]
    };
  }

  renderAnalyticsRoadCharts = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#0000fd',
        '#fd0002'
      ],
      title: {
        text: 'Road Inspection Overview',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          distributed: true
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
          text: 'Areas Density wise Classification'
        },
        type: 'category',
        categories: ['Total Inspected (KM)', 'Total Defected (KM)'],
      },
      yaxis: {
        title: {
          text: 'Kilometers'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: "PotHoles Intensity",
        data: [10, 8]
      }],
    };

    this.analysisChartOptions = {
      series: [10, 8, 20, 6],
      labels: [`Total Inspected Road (km)`, 'Total Defected Road (km)', 'Potholes Count', `Cracks Length (km)`],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#22dea5', '#c63b61', '#4029b3', '#c99b18'],
      title: {
        text: 'Road Inspection Summary',
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

    this.chartOptions = {
      chart: {
        type: 'scatter',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#0000fd',
        '#fd0002'
      ],
      title: {
        text: 'PotHole Distribution along 10km Road Stretch',
        align: 'center',
      },
      plotOptions: {
        // bar: {
        //   horizontal: true,
        //   columnWidth: '55%',
        //   endingShape: 'rounded',
        //   distributed: true
        // },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Road Distance (km)'
        },
        tickAmount: 10,
      },
      yaxis: {
        title: {
          text: ''
        },
        tickAmount: 5,
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Potholes',
        data: [[1, 5], [1.5, 5], [2, 5], [4, 5], [5, 5], [6, 5], [6.5, 5], [8, 5], [10,5]],
      }]
    };

    this.verticalChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#80017e',
        '#017c03',
        '#fda405'
      ],
      title: {
        text: 'Decision Insights for Government',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Values'
        },
        categories: ['New Road Cost Estimate (in Lakhs INR)', 'Estimated Repair Cost (in Lakhs INR)', 'Defect Percentage (%)'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Estimation',
        data: [100, 40, 80],
      }],
    };
  }

  renderAnalyticsWildlifeTrackingCharts = () => {
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
        text: 'Alerts',
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
          text: 'Alerts per month'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Alerts',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 80, 40, 110]
      }],
    };

    this.analysisChartOptions = {
      series: [3387, 3432, 2061, 3802],
      labels: ['Jan-Marc', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Yearly Animals Count',
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
      title: {
        text: 'Animals Count & Area Covered in Sq.KM (Monthly)',
        align: 'center'
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
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Animals Count",
          data: [903, 695, 1789, 1418, 1475, 539, 601, 326, 1134, 1066, 1557, 1179]
        },
        {
          name: "Area Covered (Sq.KM)",
          data: [68, 112, 79, 192, 191, 115, 100, 160, 119, 126, 134, 167]
        }
      ]
    };
  }

  renderAnalyticsWildfireTrackingCharts = () => {
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
        text: 'Alerts',
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
          text: 'Alerts per month'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Alerts',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 80, 40, 110]
      }],
    };

    this.analysisChartOptions = {
      series: [434, 276, 307, 315],
      labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: 'Area Covered Sq.KM (Yearly)',
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
      title: {
        text: 'Area Covered Sq.KM (Every 3 Months)',
        align: 'center'
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
        type: 'category',
        categories: ['Jan-Mar', 'Apr-Jun', 'Jul-Sept', 'Oct-Dec'],
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Area Covered (Sq.KM)",
          data: [434, 276, 307, 315]
        }
      ]
    };
  }

  renderAkinAnalyticsCharts = () => {
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
      },
      series: [
        {
          name: "Visitors Count",
          data: [121, 74, 86, 110, 109, 124, 61, 75, 111, 59, 101, 114]
        }
      ]
    };
  }

  renderInventoryManagementCharts = () => {
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
        text: 'Quantity of Food Grains distributed (in metric tons)',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        title: {
          text: 'Distribution in metric Tons'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Distribution in metric Tons",
          data: [121, 102, 115, 110, 109, 124, 100, 134, 111, 98, 101, 114]
        }
      ]
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
        },
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
        text: 'Work Progress % Bi-Annually',
        align: 'center'
      },
      xaxis: {
        type: 'category',
        categories: ['2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
      },
      yaxis: {
        title: {
          text: 'Every 2 Years'
        },
      },
      colors: ['#e4d00a', '#0eff00', '#c80000'],
      theme: {
        mode: 'dark'
      },
      series: [
        {
          name: "Frequency in %",
          data: [5, 10, 5, 3, 7, 5, 15, 30, 10, 12, 7]
        }
      ]
    };
  }

  renderMosquitoEradication = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#fd0000',
        '#fda401',
        '#017c03'
      ],
      title: {
        text: 'Mosquito Spraying Area Distribution and Intensity',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
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
          text: 'Spray Intensity'
        },
        type: 'category',
        categories: ['Near Water Bodies (5KM)', 'Moderate Distance (3KM)', 'Far From Water Bodies (2KM)'],
      },
      yaxis: {
        title: {
          text: 'Area (km)'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Spray Intensity',
        data: [5, 3, 2],

      }],
    };

    this.analysisChartOptions = {
      series: [17, 7, 10, 5],
      labels: ['Total Mosquito Spots', 'Total Mosquito Ponds', 'Total Breeding Spots', 'Total Mosquito Drain near Residents'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#22dea5', '#c63b61', '#4029b3', '#c99b18'],
      title: {
        text: 'Inspection Summary',
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

    this.chartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#017c03',
        '#fda401',
        '#fd0000'
      ],
      title: {
        text: 'Estimated Cost for Periodic Mosquito Spraying',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Cost (in Lakhs)'
        },
        categories: ['Far From Water Bodies (2KM)', 'Moderate Distance (3KM)', 'Near Water Bodies (5KM)'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Cost (in lakhs)',
        data: [7, 15, 40],
      }],
    };

    this.verticalChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#80017e',
        '#017c03',
        '#fda405'
      ],
      title: {
        text: 'Decision Insights for Government',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Values'
        },
        categories: ['New Road Cost Estimate (in Lakhs INR)', 'Estimated Repair Cost (in Lakhs INR)', 'Defect Percentage (%)'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Estimation',
        data: [100, 40, 80],
      }],
    };
  }

  renderGarbagePileup = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        stacked: true,
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#460fa9',
        '#6564fe'
      ],
      title: {
        text: 'Garbage & Water Logging Clearance Priority Based on Residential Density',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
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
          text: 'Areas Density wise Classification'
        },
        type: 'category',
        categories: ['High-Density Residential (4KM)', 'Moderate-Density Residential (3KM)', 'Low-Density Residential (2KM)'],
      },
      yaxis: {
        title: {
          text: 'Volume / Severity Score'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: "Garbage Volume (in tons)",
        data: [80, 50, 32]
      },
      {
        name: "Water Logging Severity (score)",
        data: [15, 10, 8]
      }],
    };

    this.analysisChartOptions = {
      series: [17, 7, 10, 5],
      labels: ['Total Garbage Spots', 'Total Garbage Filled ', 'Total Garbage Partially Filled', `Total Garbage's found near Residential`],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#22dea5', '#c63b61', '#4029b3', '#c99b18'],
      title: {
        text: 'Inspection Summary',
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

    this.chartOptions = {
      chart: {
        type: 'scatter',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#f30405',
        '#ff9f06',
        '#038301'
      ],
      title: {
        text: ' Garbage & Water Logging Clearance Mapping Based on Residential Densit',
        align: 'center',
      },
      plotOptions: {
        // bar: {
        //   horizontal: true,
        //   columnWidth: '55%',
        //   endingShape: 'rounded',
        //   distributed: true
        // },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Road Distance (km)'
        },
        tickAmount: 5,
      },
      yaxis: {
        title: {
          text: ''
        },
        tickAmount: 5,
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'High Density Clearance Spots',
        data: [[0, 30], [2, 30], [4, 30], [6, 30], [8, 30]],
      },
      {
        name: 'Moderate Density Clearance Spots',
        data: [[30, 15], [32, 15], [34, 15], [36, 15], [38, 15]],
      },
      {
        name: 'Low Density Clearance Spots',
        data: [[50, 5], [52, 5], [52.5, 5], [56, 5], [57, 5]],
      }
      ]
    };

    this.verticalChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#80017e',
        '#017c03',
        '#fda405'
      ],
      title: {
        text: 'Decision Insights for Government',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Values'
        },
        categories: ['New Road Cost Estimate (in Lakhs INR)', 'Estimated Repair Cost (in Lakhs INR)', 'Defect Percentage (%)'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Estimation',
        data: [100, 40, 80],
      }],
    };
  }
renderhydraavijayawadaPileup = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        stacked: true,
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#460fa9',
        '#6564fe'
      ],
      title: {
        text: 'Encroached Area Summary',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
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
          text: 'Areas Density wise Classification'
        },
        type: 'category',
        categories: ['Encroached Area 1', 'Encroached Area 2', 'Encroached Area 3', 'Encroached Area 4', 'Encroached Area 5'],
      },
      yaxis: {
        title: {
          text: 'Volume / Severity Score'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: "Encroached Area(in sq meters)",
        data: [48239, 1749.31, 598.1, 13518.24, 1519.07]
      }],
    };

    this.analysisChartOptions = {
      series: [5, 3, 1, 1],
      labels: ['Total Demolished Spots', 'Total Pending Spots', 'Total Partially Demolished', `Total No Residential Spots`],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#22dea5', '#c63b61', '#4029b3', '#c99b18'],
      title: {
        text: 'Inspection Summary',
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

    this.chartOptions = {
      chart: {
        type: 'scatter',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#f30405',
        '#ff9f06',
        '#038301'
      ],
      title: {
        text: 'Garbage area by time',
        align: 'center',
      },
      plotOptions: {
        // bar: {
        //   horizontal: true,
        //   columnWidth: '55%',
        //   endingShape: 'rounded',
        //   distributed: true
        // },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Time (Day)'
        },
        tickAmount: 5,
      },
      yaxis: {
        title: {
          text: 'Area'
        },
        tickAmount: 5,
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Garbage Spots Day 1',
        data: [[1, 46.09], [1,67.04], [1,51.16], [1,252.09], [1,523.95], [1,155.29],, [1,195.1]],
      },
      {
        name: 'Garbage Spots Day 8',
        data: [[8, 96.09], [8,167.04], [8,151.16], [8,52.09], [8,23.95], [8,55.29], [8,95.1]],
      },
      {
        name: 'Garbage Spots Day 15',
        data: [[15, 196.09], [15,67.04], [15,51.16], [15,152.09], [15,223.95], [15,255.29], [15,295.1]],
      }
      ]
    };
    this.verticalChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#80017e',
        '#017c03',
        '#fda405'
      ],
      title: {
        text: 'Decision Insights for Government',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Values'
        },
        categories: ['Demolished Cost Estimate (in Lakhs INR)', 'Estimated Repair Cost (in Lakhs INR)', 'Demolished Percentage (%)'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Estimation',
        data: [100, 40, 80],
      }],
    };
  }
renderhydraalakePileup = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        stacked: true,
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#460fa9',
        '#6564fe'
      ],
      title: {
        text: 'Encroached Area Summary',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
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
          text: 'Areas Density wise Classification'
        },
        type: 'category',
        categories: ['Encroached Area 1', 'Encroached Area 2', 'Encroached Area 3', 'Encroached Area 4', 'Encroached Area 5', 'Encroached Area 6', 'Encroached Area 7', 'Encroached Area 8', 'Encroached Area 9', 'Encroached Area 10', 'Encroached Area 11', 'Encroached Area 12', 'Encroached Area 13', 'Encroached Area 14'],
      },
      yaxis: {
        title: {
          text: 'Volume / Severity Score'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: "Encroached Area Demolished(in sq mtrs)",
        data: [1429.58,905.75,1673.62,110.621,60924.31,60794.13,981.32,722.84,13518.24,1476.23,2562.61,210.114,353.92,1224.183]
      },
      {
        name: "Encroached Area Severity (score)",
        data: [4,2,4,2,5,2,3,3,5,3,3,2,2,3]
      }],
    };

    this.analysisChartOptions = {
      series: [1429.58,905.75,1673.62,110.621,60924.31,60794.13,981.32,722.84,13518.24,1476.23,2562.61,210.114,353.92,1224.183],
      labels: ['R 001', 'R 002','R 003','R 004','R 005','GL 001','IW 001', 'IW 002','IW 003','IW 004','IW 005','R 006','R 007','R 008'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#1f77b4','#ff7f0e','#2ca02c','#d62728','#9467bd','#8c564b','#e377c2','#7f7f7f','#bcbd22','#17becf','#1abc9c','#34495e','#2ecc71','#f1c40f'],
      title: {
        text: 'Inspection Summary',
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

    this.chartOptions = {
      chart: {
        type: 'scatter',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#f30405',
        '#ff9f06',
        '#038301'
      ],
      title: {
        text: 'Demolished area by time',
        align: 'center',
      },
      plotOptions: {
        // bar: {
        //   horizontal: true,
        //   columnWidth: '55%',
        //   endingShape: 'rounded',
        //   distributed: true
        // },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Time (Day)'
        },
        tickAmount: 5,
      },
      yaxis: {
        title: {
          text: 'Area'
        },
        tickAmount: 5,
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'High Clearance Spots',
        data: [[0, 2], [2, 1.2], [4, 3], [6, 3], [8, 0.5]],
      },
      {
        name: 'Moderate Clearance Spots',
        data: [[30, 1.5], [32, 0.15], [34, 0.75], [36, 1], [38, 1]],
      },
      {
        name: 'Low Clearance Spots',
        data: [[50, 0.15], [52, 0.5], [52.5, 0], [56, 0], [57, 0]],
      }
      ]
    };

    this.verticalChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#80017e',
        '#017c03',
        '#fda405'
      ],
      title: {
        text: 'Decision Insights for Government',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Values'
        },
        categories: ['Encroached Area(in Acres)', 'Encroached Cost Estimate (in Crores INR)'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Estimation',
        data: [33.16, 82.904],
      }],
    };
  }
  renderhydraanala = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        stacked: true,
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#460fa9',
        '#6564fe'
      ],
      title: {
        text: 'Encroached Area Summary',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
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
          text: 'Areas Density wise Classification'
        },
        type: 'category',
        categories: ['Encroached Area 1', 'Encroached Area 2'],
      },
      yaxis: {
        title: {
          text: 'Volume / Severity Score'
        },
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: "Encroached Area Demolished(in sq mtrs)",
        data: [1984.05,1548.98]
      },
      {
        name: "Encroached Area Severity (score)",
        data: [5,4]
      }],
    };

    this.analysisChartOptions = {
      series: [33.08, 39.81, 59.98, 32.3, 44.17, 3.88, 319.26, 319.16, 37.8,72.86, 33.84, 352.84, 883.97, 110.43, 131.78, 28.61, 13.4, 20.85,83.79, 464.41, 215.68, 135.66, 148.69, 9.38, 14.65, 163.28, 102.2,149.21, 73.36, 30.64, 74.36, 125.98, 113.87, 166.87],
      labels: ['F 001', 'F 002', 'F 003', 'F 004', 'F 005', 'F 006', 'F 007', 'F 008', 'F 009', 'F 010','F 011', 'F 012', 'F 013', 'F 014', 'F 015', 'F 016', 'F 017', 'F 018', 'F 019', 'F 020','F 021', 'F 022', 'F 023', 'F 024', 'F 025', 'F 026', 'F 027', 'F 028', 'F 029', 'F 030','F 031', 'F 032', 'F 033', 'F 034'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd','#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf','#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5','#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5','#393b79', '#637939', '#8c6d31', '#843c39', '#7b4173','#5254a3', '#6b6ecf', '#9c9ede', '#8ca252', '#bd9e39','#ad494a', '#a55194', '#de9ed6', '#e7969c'],
      title: {
        text: 'Flow analysis',
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

    this.chartOptions = {
      chart: {
        type: 'scatter',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#f30405',
        '#ff9f06',
        '#038301'
      ],
      title: {
        text: 'Demolished area by time',
        align: 'center',
      },
      plotOptions: {
        // bar: {
        //   horizontal: true,
        //   columnWidth: '55%',
        //   endingShape: 'rounded',
        //   distributed: true
        // },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Time (Day)'
        },
        tickAmount: 5,
      },
      yaxis: {
        title: {
          text: 'Area'
        },
        tickAmount: 5,
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'High Clearance Spots',
        data: [[6, 319.26], [7, 319.16], [11, 352.84], [12, 883.97], [19, 464.41],[20, 215.68], [25, 163.28], [27, 149.21], [32, 166.87]],
      },
      {
        name: 'Moderate Clearance Spots',
        data: [[0, 33.08], [1, 39.81], [2, 59.98], [3, 32.3], [4, 44.17], [8, 37.8],[9, 72.86], [10, 33.84], [13, 110.43], [14, 131.78], [15, 28.61],[18, 83.79], [21, 135.66], [22, 148.69], [26, 102.2], [28, 73.36],[29, 30.64], [30, 74.36], [31, 125.98], [33, 113.87]],
      },
      {
        name: 'Low Clearance Spots',
        data: [[5, 3.88], [16, 13.4], [17, 20.85], [23, 9.38], [24, 14.65]],
      }
      ]
    };

    this.verticalChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: {
          autoSelected: "pan",
          show: false
        },
      },
      colors: [
        '#80017e',
        '#017c03',
        '#fda405'
      ],
      title: {
        text: 'Decision Insights for Government',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '55%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      grid: {
        borderColor: '#90A4AE',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Values'
        },
        categories: ['Encroached Area(in Acres)', 'Encroached Cost Estimate (in Crores INR)'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      theme: {
        mode: 'dark'
      },
      series: [{
        name: 'Estimation',
        data: [0.85, 0],
      }],
    };
  }

  renderBhimavaramAnalyticsCharts = () => {
    this.alertChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: { autoSelected: "pan", show: false },
      },
      colors: ['#460fa9', '#6564fe', '#ff9f06', '#22dea5', '#c63b61'],
      title: { text: 'Deliverable Area Summary (m²)', align: 'center' },
      plotOptions: { bar: { horizontal: false, columnWidth: '55%', distributed: true } },
      grid: { borderColor: '#90A4AE', strokeDashArray: 7 },
      xaxis: {
        type: 'category',
        categories: ['Agri Land', 'NRE Land', 'Road Health', 'Lake Monitoring', 'Dumpyard Site'],
      },
      yaxis: { title: { text: 'Total Area' } },
      theme: { mode: 'dark' },
      series: [{
        name: "Total Area",
        data: [82379, 235491, 1007667, 77490, 18130]
      }],
    };

    this.analysisChartOptions = {
      series: [37, 11, 3, 9],
      labels: ['Green Areas (Count)', 'Road Patches (Count)', 'Lake Dumps (Count)', 'Waste Piles (Count)'],
      chart: {
        type: "donut",
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
      },
      colors: ['#22dea5', '#c63b61', '#4029b3', '#c99b18'],
      title: { text: 'Deliverable Metrics Distribution', align: 'center' },
      theme: { mode: 'dark' }
    };

    this.chartOptions = {
      chart: {
        type: 'area',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: { show: false },
      },
      colors: ['#038301', '#f30405'],
      title: { text: 'Green Area vs Waste Piles Coverage (m²)', align: 'center' },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
        title: { text: 'Analytical Timeline' }
      },
      theme: { mode: 'dark' },
      series: [
        { name: 'Green Area Total (m²)', data: [11000, 12500, 13134, 13134] },
        { name: 'Waste Piles Total (m²)', data: [500, 480, 452, 452] }
      ]
    };

    this.verticalChartOptions = {
      chart: {
        type: 'bar',
        background: "linear-gradient(to bottom, rgb(17, 13, 37), rgb(40, 46, 137))",
        height: this.screenHeight,
        toolbar: { show: false },
      },
      colors: ['#80017e', '#017c03'],
      title: { text: 'Projected vs Fitted Metrics (Bhimavaram)', align: 'center' },
      plotOptions: { bar: { horizontal: true, distributed: true } },
      xaxis: {
        categories: ['Lake Project Area (km)', 'Road Perimeter (km)'],
      },
      theme: { mode: 'dark' },
      series: [{
        name: 'Technical Distance',
        data: [1.23, 4.38],
      }],
    };
  }

}
