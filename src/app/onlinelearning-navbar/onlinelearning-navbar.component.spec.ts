import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinelearningNavbarComponent } from './onlinelearning-navbar.component';

describe('OnlinelearningNavbarComponent', () => {
  let component: OnlinelearningNavbarComponent;
  let fixture: ComponentFixture<OnlinelearningNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinelearningNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinelearningNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
