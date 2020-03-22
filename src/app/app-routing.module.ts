import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component'
import { LayoutComponent } from './layout/layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'professional-networking', loadChildren: () => import('./professional-networking/professional-networking.module').then(m => m.ProfessionalNetworkingModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'online-learning', loadChildren: () => import('./online-learning/online-learning.module').then(m => m.OnlineLearningModule) },
  { path: 'offline-learning', loadChildren: () => import('./offline-learning/offline-learning.module').then(m => m.OfflineLearningModule) },
  { path: 'finance-center', loadChildren: () => import('./finance-center/finance-center.module').then(m => m.FinanceCenterModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
