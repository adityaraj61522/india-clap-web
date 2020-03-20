import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShareAlertComponent } from './profile-share-alert.component';

describe('ProfileShareAlertComponent', () => {
  let component: ProfileShareAlertComponent;
  let fixture: ComponentFixture<ProfileShareAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileShareAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileShareAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
