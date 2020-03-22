import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCenterComponent } from './finance-center.component';

describe('FinanceCenterComponent', () => {
  let component: FinanceCenterComponent;
  let fixture: ComponentFixture<FinanceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
