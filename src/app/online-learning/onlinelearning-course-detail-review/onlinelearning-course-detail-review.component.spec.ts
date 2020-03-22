import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinelearningCourseDetailReviewComponent } from './onlinelearning-course-detail-review.component';

describe('OnlinelearningCourseDetailReviewComponent', () => {
  let component: OnlinelearningCourseDetailReviewComponent;
  let fixture: ComponentFixture<OnlinelearningCourseDetailReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinelearningCourseDetailReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinelearningCourseDetailReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
