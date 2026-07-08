import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlertsComponent } from './admin-alerts.component';

describe('AdminAlertsComponent', () => {
  let component: AdminAlertsComponent;
  let fixture: ComponentFixture<AdminAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAlertsComponent]
    });
    fixture = TestBed.createComponent(AdminAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
