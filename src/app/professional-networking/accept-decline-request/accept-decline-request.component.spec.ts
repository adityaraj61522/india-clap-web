import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDeclineRequestComponent } from './accept-decline-request.component';

describe('AcceptDeclineRequestComponent', () => {
  let component: AcceptDeclineRequestComponent;
  let fixture: ComponentFixture<AcceptDeclineRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptDeclineRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptDeclineRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
