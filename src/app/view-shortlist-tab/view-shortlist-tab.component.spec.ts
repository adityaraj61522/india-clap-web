import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShortlistTabComponent } from './view-shortlist-tab.component';

describe('ViewShortlistTabComponent', () => {
  let component: ViewShortlistTabComponent;
  let fixture: ComponentFixture<ViewShortlistTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShortlistTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShortlistTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
