import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileEditableComponent } from './my-profile-editable.component';

describe('MyProfileEditableComponent', () => {
  let component: MyProfileEditableComponent;
  let fixture: ComponentFixture<MyProfileEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
