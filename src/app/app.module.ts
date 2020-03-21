import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
  ValidatorFn
} from "@angular/forms";
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
import { ProfileShareAlertComponent } from './profile-share-alert/profile-share-alert.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';
import { FinanceCentreLoanApplyComponent } from './finance-centre-loan-apply/finance-centre-loan-apply.component';
import { FinanceCentreLoanProvidersComponent } from './finance-centre-loan-providers/finance-centre-loan-providers.component';
import { OnlinelearningCourseDetailReviewComponent } from './onlinelearning-course-detail-review/onlinelearning-course-detail-review.component';
import { OnlinelearningNavbarComponent } from './onlinelearning-navbar/onlinelearning-navbar.component';
import { OnlinelearningHomeComponent } from './onlinelearning-home/onlinelearning-home.component';
import { ArchiveJobsAlertComponent } from './archive-jobs-alert/archive-jobs-alert.component';
import { ArchiveJobSearchComponent } from './archive-job-search/archive-job-search.component';
import { AlertNoActiveJobComponent } from './alert-no-active-job/alert-no-active-job.component';
import { RegisterSkilledCoursesComponent } from './register-skilled-courses/register-skilled-courses.component';
import { SkillCoursesResultsComponent } from './skill-courses-results/skill-courses-results.component';

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
    JobDescriptionComponent,
    ProfileShareAlertComponent,
    UploadResumeComponent,
    FinanceCentreLoanApplyComponent,
    FinanceCentreLoanProvidersComponent,
    OnlinelearningCourseDetailReviewComponent,
    OnlinelearningNavbarComponent,
    OnlinelearningHomeComponent,
    ArchiveJobsAlertComponent,
    ArchiveJobSearchComponent,
    AlertNoActiveJobComponent,
    RegisterSkilledCoursesComponent,
    SkillCoursesResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // FormGroup,
    // FormControl,
     ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
