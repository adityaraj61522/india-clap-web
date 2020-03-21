import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceCentreLoanApplyComponent } from './finance-centre-loan-apply/finance-centre-loan-apply.component';
import { FinanceCentreLoanProvidersComponent } from './finance-centre-loan-providers/finance-centre-loan-providers.component';
import { OnlinelearningCourseDetailReviewComponent } from './onlinelearning-course-detail-review/onlinelearning-course-detail-review.component';
import { OnlinelearningHomeComponent } from './onlinelearning-home/onlinelearning-home.component';

import { HomeComponent } from './home/home.component'
import { LayoutComponent } from './layout/layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'professional-networking', loadChildren: () => import('./professional-networking/professional-networking.module').then(m => m.ProfessionalNetworkingModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'apply-micro-loan', component: FinanceCentreLoanApplyComponent },
  { path: 'loan-providers', component: FinanceCentreLoanProvidersComponent },
  { path: 'course-details', component: OnlinelearningCourseDetailReviewComponent },
  { path: 'online-learning-home', component: OnlinelearningHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
