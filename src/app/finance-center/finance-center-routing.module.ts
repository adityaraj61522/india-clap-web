import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceCentreLoanApplyComponent } from './finance-centre-loan-apply/finance-centre-loan-apply.component';
import { FinanceCentreLoanProvidersComponent } from './finance-centre-loan-providers/finance-centre-loan-providers.component';
import { FinanceCenterComponent } from './finance-center.component';


const routes: Routes = [
  {
    path: '', component: FinanceCenterComponent,
    children: [
      {path:'micro-loan-apply',component:FinanceCentreLoanApplyComponent},
      {path:'loan-providers',component:FinanceCentreLoanProvidersComponent},
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceCenterRoutingModule { }
