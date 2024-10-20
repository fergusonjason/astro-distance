import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlieseSearchComponent } from './gliese-search.component';

describe('GlieseSearchComponent', () => {
  let component: GlieseSearchComponent;
  let fixture: ComponentFixture<GlieseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlieseSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlieseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
