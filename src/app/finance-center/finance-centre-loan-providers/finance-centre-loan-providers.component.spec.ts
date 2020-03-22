import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCentreLoanProvidersComponent } from './finance-centre-loan-providers.component';

describe('FinanceCentreLoanProvidersComponent', () => {
  let component: FinanceCentreLoanProvidersComponent;
  let fixture: ComponentFixture<FinanceCentreLoanProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceCentreLoanProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceCentreLoanProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
