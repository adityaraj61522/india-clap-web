import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineLearningComponent } from './offline-learning.component';

describe('OfflineLearningComponent', () => {
  let component: OfflineLearningComponent;
  let fixture: ComponentFixture<OfflineLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
