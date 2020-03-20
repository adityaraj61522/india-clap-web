import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertNoActiveJobComponent } from './alert-no-active-job.component';

describe('AlertNoActiveJobComponent', () => {
  let component: AlertNoActiveJobComponent;
  let fixture: ComponentFixture<AlertNoActiveJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertNoActiveJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertNoActiveJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
