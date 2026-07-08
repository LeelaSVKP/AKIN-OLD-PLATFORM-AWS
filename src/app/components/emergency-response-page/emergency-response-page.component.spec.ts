import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyResponsePageComponent } from './emergency-response-page.component';

describe('EmergencyResponsePageComponent', () => {
  let component: EmergencyResponsePageComponent;
  let fixture: ComponentFixture<EmergencyResponsePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyResponsePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyResponsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
