import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileDropdownComponent } from './my-profile-dropdown.component';

describe('MyProfileDropdownComponent', () => {
  let component: MyProfileDropdownComponent;
  let fixture: ComponentFixture<MyProfileDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
