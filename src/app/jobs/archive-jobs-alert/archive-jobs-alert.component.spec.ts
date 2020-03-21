import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveJobsAlertComponent } from './archive-jobs-alert.component';

describe('ArchiveJobsAlertComponent', () => {
  let component: ArchiveJobsAlertComponent;
  let fixture: ComponentFixture<ArchiveJobsAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveJobsAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveJobsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
