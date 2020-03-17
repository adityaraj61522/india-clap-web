import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousSectorsJobsComponent } from './various-sectors-jobs.component';

describe('VariousSectorsJobsComponent', () => {
  let component: VariousSectorsJobsComponent;
  let fixture: ComponentFixture<VariousSectorsJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariousSectorsJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariousSectorsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
