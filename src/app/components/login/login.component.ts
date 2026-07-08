import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string;
  errorMessage: boolean;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.userName = '';
    this.errorMessage = false;
  }

  login(event: any) {
    event.preventDefault();
    localStorage.clear();
    let email = document.getElementById('email') as HTMLInputElement;
    if ((email.value.toString().includes('@wonder'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'mines');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@roads'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'roads');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@solar'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'solar');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@wind'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'wind');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@power'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'transmission_lines');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@forestry'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'forest_tree_monitoring');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@afforestation'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'afforestation');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@wildlife'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'wildlife_tracking');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@wildfire'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'wildfire_detection');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@akin'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', storageValue);
      localStorage.setItem('association_type', 'akin');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else if ((email.value.toString().includes('@gmail'))) {
      let storageValue = email.value.toString().split('@')[0];
      localStorage.setItem('username', 'platform@akinanalytics.ai');
      localStorage.setItem('association_type', 'admin');
      this.toastr.success('CheckIn Successfully !');
      this.router.navigate(['/verify']);
    } else {
      this.toastr.error('Invalid Corporate Domain');
      console.log('Invalid Credentials');
    }
  }

}
