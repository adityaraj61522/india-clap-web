import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinelearningHomeComponent } from './onlinelearning-home.component';

describe('OnlinelearningHomeComponent', () => {
  let component: OnlinelearningHomeComponent;
  let fixture: ComponentFixture<OnlinelearningHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinelearningHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinelearningHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
