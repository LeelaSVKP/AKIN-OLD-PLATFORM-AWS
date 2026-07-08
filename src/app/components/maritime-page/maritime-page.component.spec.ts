import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimePageComponent } from './maritime-page.component';

describe('MaritimePageComponent', () => {
  let component: MaritimePageComponent;
  let fixture: ComponentFixture<MaritimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaritimePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaritimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
