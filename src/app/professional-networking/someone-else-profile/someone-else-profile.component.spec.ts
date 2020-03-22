import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeoneElseProfileComponent } from './someone-else-profile.component';

describe('SomeoneElseProfileComponent', () => {
  let component: SomeoneElseProfileComponent;
  let fixture: ComponentFixture<SomeoneElseProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeoneElseProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeoneElseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
