import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillTestComponent } from './skill-test/skill-test.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { PostJobComponent } from './post-job/post-job.component';
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { JobPostEditComponent } from './job-post-edit/job-post-edit.component';
import { ViewCandidatesComponent } from './view-candidates/view-candidates.component';
import { ViewShortlistTabComponent } from './view-shortlist-tab/view-shortlist-tab.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { JobCardComponent } from './job-card/job-card.component';
import { VariousSectorsJobsComponent } from './various-sectors-jobs/various-sectors-jobs.component';


const routes: Routes = [
  { path: '', redirectTo: 'take-test', pathMatch: 'full' },
  { path: 'take-test', component: SkillTestComponent },
  { path: 'saved-jobs', component: SavedJobsComponent },
  { path: 'applied-jobs', component: AppliedJobsComponent },
  { path: 'post-job', component: PostJobComponent },
  { path: 'job-postings', component: JobPostingsComponent },
  { path: 'edit-jobs', component: JobPostEditComponent },
  { path: 'view-candidates', component: ViewCandidatesComponent },
  { path: 'view-shortlisted', component: ViewShortlistTabComponent },
  { path: 'user-account', component: UserAccountComponent },
  { path: 'jobs-card', component: JobCardComponent },
  { path: 'various-sectors', component: VariousSectorsJobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
