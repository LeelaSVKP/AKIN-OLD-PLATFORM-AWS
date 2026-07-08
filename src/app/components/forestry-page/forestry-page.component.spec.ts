import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestryPageComponent } from './forestry-page.component';

describe('ForestryPageComponent', () => {
  let component: ForestryPageComponent;
  let fixture: ComponentFixture<ForestryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForestryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForestryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
