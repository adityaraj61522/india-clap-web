import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantApplySearchComponent } from './instant-apply-search.component';

describe('InstantApplySearchComponent', () => {
  let component: InstantApplySearchComponent;
  let fixture: ComponentFixture<InstantApplySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantApplySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantApplySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
