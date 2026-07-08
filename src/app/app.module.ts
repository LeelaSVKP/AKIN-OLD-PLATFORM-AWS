import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminHomeModule } from './components/admin-home/admin-home.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';
import { UploadFilesModule } from './components/upload-files/upload-files.module';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { ToastrModule } from 'ngx-toastr';
import { AccountVerificationModule } from './components/account-verification/account-verification.module';
import { SupportPageModule } from './components/support-page/support-page.module';
import { EnvironmentalMonitoringPageModule } from './components/environmental-monitoring-page/environmental-monitoring-page.module';
import { ForestryPageModule } from './components/forestry-page/forestry-page.module';
import { RealEstatePageModule } from './components/real-estate-page/real-estate-page.module';
import { UrbanPlanningPageModule } from './components/urban-planning-page/urban-planning-page.module';
import { MaritimePageModule } from './components/maritime-page/maritime-page.module';
import { InfrastructurePageModule } from './components/infrastructure-page/infrastructure-page.module';
import { EmergencyResponsePageModule } from './components/emergency-response-page/emergency-response-page.module';
import { SecuritySurveillancePageModule } from './components/security-surveillance-page/security-surveillance-page.module';
import { EnergyUtilitiesPageModule } from './components/energy-utilities-page/energy-utilities-page.module';
import { AboutUsPageModule } from './components/about-us-page/about-us-page.module';
import { LocationsPageModule } from './components/locations-page/locations-page.module';
import { BlogsPageModule } from './components/blogs-page/blogs-page.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
    declarations: [
        AppComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxImageZoomModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AdminHomeModule,
        SupportPageModule,
        AboutUsPageModule,
        BlogsPageModule,
        LocationsPageModule,
        AccountVerificationModule,
        EnvironmentalMonitoringPageModule,
        ForestryPageModule,
        RealEstatePageModule,
        UrbanPlanningPageModule,
        MaritimePageModule,
        InfrastructurePageModule,
        EmergencyResponsePageModule,
        SecuritySurveillancePageModule,
        EnergyUtilitiesPageModule,
        LandingPageModule,
        UploadFilesModule,
        AngularSlickgridModule,
        ToastrModule.forRoot()
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
