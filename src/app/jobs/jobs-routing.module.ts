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
import { VariousSectorsJobsFiltersComponent } from './various-sectors-jobs-filters/various-sectors-jobs-filters.component';
import { InstantApplySearchComponent } from './instant-apply-search/instant-apply-search.component';
import { FavSaveApplyComponent } from './fav-save-apply/fav-save-apply.component';
import { SelectAllApplyComponent } from './select-all-apply/select-all-apply.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';
import { ArchiveJobsAlertComponent } from './archive-jobs-alert/archive-jobs-alert.component';
import { ArchiveJobSearchComponent } from './archive-job-search/archive-job-search.component';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      { path: 'saved-jobs', component: SavedJobsComponent },
      { path: 'applied-jobs', component: AppliedJobsComponent },
      { path: 'post-job', component: PostJobComponent },
      { path: 'job-postings', component: JobPostingsComponent },
      { path: 'edit-jobs', component: JobPostEditComponent },
      { path: 'view-candidates', component: ViewCandidatesComponent },
      { path: 'view-shortlisted', component: ViewShortlistTabComponent },
      { path: 'user-account', component: UserAccountComponent },
      { path: 'jobs-card', component: JobCardComponent },
      { path: 'various-sectors', component: VariousSectorsJobsComponent },
      { path: 'various-jobs-filters', component: VariousSectorsJobsFiltersComponent },
      { path: 'instant-apply-search', component: InstantApplySearchComponent },
      { path: 'fav-save-apply', component: FavSaveApplyComponent },
      { path: 'select-all-apply', component: SelectAllApplyComponent },
      { path: 'job-description', component: JobDescriptionComponent },
      { path: 'upload-resume', component: UploadResumeComponent },
      { path: 'archive-job-alert', component: ArchiveJobsAlertComponent },
      { path: 'archive-job-search', component: ArchiveJobSearchComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
