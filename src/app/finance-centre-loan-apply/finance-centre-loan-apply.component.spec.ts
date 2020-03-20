import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCentreLoanApplyComponent } from './finance-centre-loan-apply.component';

describe('FinanceCentreLoanApplyComponent', () => {
  let component: FinanceCentreLoanApplyComponent;
  let fixture: ComponentFixture<FinanceCentreLoanApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceCentreLoanApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceCentreLoanApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
