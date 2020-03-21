import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceCentreLoanApplyComponent } from './finance-centre-loan-apply/finance-centre-loan-apply.component';
import { FinanceCentreLoanProvidersComponent } from './finance-centre-loan-providers/finance-centre-loan-providers.component';
import { OnlinelearningCourseDetailReviewComponent } from './onlinelearning-course-detail-review/onlinelearning-course-detail-review.component';
import { OnlinelearningHomeComponent } from './onlinelearning-home/onlinelearning-home.component';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'apply-micro-loan', component: FinanceCentreLoanApplyComponent },
  { path: 'loan-providers', component: FinanceCentreLoanProvidersComponent },
  { path: 'course-details', component: OnlinelearningCourseDetailReviewComponent },
  { path: 'online-learning-home', component: OnlinelearningHomeComponent },
  { path: 'professional-networking', loadChildren: () => import('./professional-networking/professional-networking.module').then(m => m.ProfessionalNetworkingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
