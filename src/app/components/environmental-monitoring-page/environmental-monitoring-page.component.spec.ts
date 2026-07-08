import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalMonitoringPageComponent } from './environmental-monitoring-page.component';

describe('EnvironmentalMonitoringPageComponent', () => {
  let component: EnvironmentalMonitoringPageComponent;
  let fixture: ComponentFixture<EnvironmentalMonitoringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnvironmentalMonitoringPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvironmentalMonitoringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
