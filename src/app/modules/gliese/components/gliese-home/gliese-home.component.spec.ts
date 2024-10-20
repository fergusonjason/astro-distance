import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlieseHomeComponent } from './gliese-home.component';

describe('GlieseHomeComponent', () => {
  let component: GlieseHomeComponent;
  let fixture: ComponentFixture<GlieseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlieseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlieseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
