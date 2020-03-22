import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSkilledCoursesComponent } from './register-skilled-courses.component';

describe('RegisterSkilledCoursesComponent', () => {
  let component: RegisterSkilledCoursesComponent;
  let fixture: ComponentFixture<RegisterSkilledCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSkilledCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSkilledCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
