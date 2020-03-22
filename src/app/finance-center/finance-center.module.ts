import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceCenterRoutingModule } from './finance-center-routing.module';
import { FinanceCenterComponent } from './finance-center.component';
import { FinanceCentreLoanApplyComponent } from './finance-centre-loan-apply/finance-centre-loan-apply.component';
import { FinanceCentreLoanProvidersComponent } from './finance-centre-loan-providers/finance-centre-loan-providers.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FinanceCenterComponent,
    FinanceCentreLoanApplyComponent,
    FinanceCentreLoanProvidersComponent
  ],
  imports: [
    CommonModule,
    FinanceCenterRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class FinanceCenterModule { }
