import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AccountVerificationComponent } from './components/account-verification/account-verification.component';
import { SupportPageComponent } from './components/support-page/support-page.component';
import { EnvironmentalMonitoringPageComponent } from './components/environmental-monitoring-page/environmental-monitoring-page.component';
import { ForestryPageComponent } from './components/forestry-page/forestry-page.component';
import { RealEstatePageComponent } from './components/real-estate-page/real-estate-page.component';
import { UrbanPlanningPageComponent } from './components/urban-planning-page/urban-planning-page.component';
import { EmergencyResponsePageComponent } from './components/emergency-response-page/emergency-response-page.component';
import { InfrastructurePageComponent } from './components/infrastructure-page/infrastructure-page.component';
import { MaritimePageComponent } from './components/maritime-page/maritime-page.component';
import { SecuritySurveillancePageComponent } from './components/security-surveillance-page/security-surveillance-page.component';
import { EnergyUtilitiesPageComponent } from './components/energy-utilities-page/energy-utilities-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { BlogsPageComponent } from './components/blogs-page/blogs-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'verify',
    component: AccountVerificationComponent
  },
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'support',
    component: SupportPageComponent
  },
  {
    path: 'aboutus',
    component: AboutUsPageComponent
  },
  {
    path: 'blogs',
    component: BlogsPageComponent
  },
  {
    path: 'locations',
    component: LocationsPageComponent
  },
  {
    path: 'environmental-monitoring',
    component: EnvironmentalMonitoringPageComponent
  },
  {
    path: 'forestry',
    component: ForestryPageComponent
  },
  {
    path: 'real-estate',
    component: RealEstatePageComponent
  },
  {
    path: 'urban-planning',
    component: UrbanPlanningPageComponent
  },
  {
    path: 'emergency-response',
    component: EmergencyResponsePageComponent
  },
  {
    path: 'infrastructure',
    component: InfrastructurePageComponent
  },
  {
    path: 'maritime',
    component: MaritimePageComponent
  },
  {
    path: 'security-surveillance',
    component: SecuritySurveillancePageComponent
  },
  {
    path: 'energy-utilities',
    component: EnergyUtilitiesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
