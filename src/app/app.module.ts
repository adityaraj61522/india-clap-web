import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { BannerComponent } from './banner/banner.component';
import { JobDescriptionComponent } from './job-description/job-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillTestComponent,
    SavedJobsComponent,
    AppliedJobsComponent,
    PostJobComponent,
    JobPostingsComponent,
    JobPostEditComponent,
    ViewCandidatesComponent,
    ViewShortlistTabComponent,
    UserAccountComponent,
    JobCardComponent,
    VariousSectorsJobsComponent,
    VariousSectorsJobsFiltersComponent,
    InstantApplySearchComponent,
    FavSaveApplyComponent,
    SelectAllApplyComponent,
    BannerComponent,
    JobDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
