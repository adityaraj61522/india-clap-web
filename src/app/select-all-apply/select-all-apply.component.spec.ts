import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAllApplyComponent } from './select-all-apply.component';

describe('SelectAllApplyComponent', () => {
  let component: SelectAllApplyComponent;
  let fixture: ComponentFixture<SelectAllApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAllApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAllApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
