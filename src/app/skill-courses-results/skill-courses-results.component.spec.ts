import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCoursesResultsComponent } from './skill-courses-results.component';

describe('SkillCoursesResultsComponent', () => {
  let component: SkillCoursesResultsComponent;
  let fixture: ComponentFixture<SkillCoursesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCoursesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCoursesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
