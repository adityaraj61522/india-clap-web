import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousSectorsJobsFiltersComponent } from './various-sectors-jobs-filters.component';

describe('VariousSectorsJobsFiltersComponent', () => {
  let component: VariousSectorsJobsFiltersComponent;
  let fixture: ComponentFixture<VariousSectorsJobsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariousSectorsJobsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariousSectorsJobsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
