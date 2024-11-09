import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualCalculationComponent } from './manual-calculation.component';

describe('ManualCalculationComponent', () => {
  let component: ManualCalculationComponent;
  let fixture: ComponentFixture<ManualCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
