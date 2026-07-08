import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrl: './account-verification.component.scss'
})
export class AccountVerificationComponent {
  password: string;
  associationType: string | null = null;

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.password = '';
    this.associationType = localStorage.getItem('association_type');
  }

  login(event: any) {
    event.preventDefault();
    let password = document.getElementById('password') as HTMLInputElement;
    if (password.value === 'AK!N@n@lyt!c$') {
      this.toastr.success('Logged In Successfully !');
      this.router.navigate(['/admin']);
    } else {
      this.toastr.error('Invalid Credentials');
      console.log('Invalid Credentials');
    }
  }
}
