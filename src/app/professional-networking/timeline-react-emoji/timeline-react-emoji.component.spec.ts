import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineReactEmojiComponent } from './timeline-react-emoji.component';

describe('TimelineReactEmojiComponent', () => {
  let component: TimelineReactEmojiComponent;
  let fixture: ComponentFixture<TimelineReactEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineReactEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineReactEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
