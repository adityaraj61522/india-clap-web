import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLearningComponent } from './online-learning.component';

describe('OnlineLearningComponent', () => {
  let component: OnlineLearningComponent;
  let fixture: ComponentFixture<OnlineLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
