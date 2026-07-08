import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/sharedService/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  selectedMenu: string;
  currentUser: string | null = null;
  associationType: string | null = null;
  selectedProject: string | null = null;
  
// ✅ Add this to control the dropdown visibility
isAdminDropdownOpen: boolean = false;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private toastr: ToastrService
  ) {
    this.currentUser = localStorage.getItem('username');
    this.associationType = localStorage.getItem('association_type');
    this.selectedMenu = 'dashboard';
    this.sharedService.changeHomeMenuSubject.subscribe((itemType: string) => {
      this.selectedMenu = itemType;
    });
    this.selectedProject = localStorage.getItem('selected_project') ?? null;
  }

  ngOnInit(): void {
    console.log('Init');
  }

  // ✅ Add this method to toggle dropdown
  toggleAdminDropdown() {
    this.isAdminDropdownOpen = !this.isAdminDropdownOpen;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('association_type');
    localStorage.removeItem('selected_project');
    localStorage.clear();
    this.toastr.success('Logged Out Successfully!');
    this.router.navigate(['/']);
  }

  changeMenuItem(item: string) {
    this.selectedMenu = item;
  }

  goToLandingPage(): void {
    this.router.navigate(['/']);
  }
}
