import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLikeReactComponent } from './timeline-like-react.component';

describe('TimelineLikeReactComponent', () => {
  let component: TimelineLikeReactComponent;
  let fixture: ComponentFixture<TimelineLikeReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLikeReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLikeReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
