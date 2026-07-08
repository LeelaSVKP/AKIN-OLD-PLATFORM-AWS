import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyUtilitiesPageComponent } from './energy-utilities-page.component';

describe('EnergyUtilitiesPageComponent', () => {
  let component: EnergyUtilitiesPageComponent;
  let fixture: ComponentFixture<EnergyUtilitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergyUtilitiesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyUtilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
