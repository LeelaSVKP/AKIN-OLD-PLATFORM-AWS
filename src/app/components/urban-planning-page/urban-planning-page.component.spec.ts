import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanPlanningPageComponent } from './urban-planning-page.component';

describe('UrbanPlanningPageComponent', () => {
  let component: UrbanPlanningPageComponent;
  let fixture: ComponentFixture<UrbanPlanningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrbanPlanningPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrbanPlanningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
