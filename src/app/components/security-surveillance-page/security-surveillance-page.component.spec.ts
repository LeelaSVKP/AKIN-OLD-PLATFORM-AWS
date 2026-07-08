import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySurveillancePageComponent } from './security-surveillance-page.component';

describe('SecuritySurveillancePageComponent', () => {
  let component: SecuritySurveillancePageComponent;
  let fixture: ComponentFixture<SecuritySurveillancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuritySurveillancePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecuritySurveillancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
