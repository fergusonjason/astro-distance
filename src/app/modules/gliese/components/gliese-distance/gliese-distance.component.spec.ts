import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlieseDistanceComponent } from './gliese-distance.component';

describe('GlieseDistanceComponent', () => {
  let component: GlieseDistanceComponent;
  let fixture: ComponentFixture<GlieseDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlieseDistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlieseDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
