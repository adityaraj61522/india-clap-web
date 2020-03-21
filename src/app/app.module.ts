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
import { FinanceCentreLoanApplyComponent } from './finance-centre-loan-apply/finance-centre-loan-apply.component';
import { FinanceCentreLoanProvidersComponent } from './finance-centre-loan-providers/finance-centre-loan-providers.component';
import { OnlinelearningCourseDetailReviewComponent } from './onlinelearning-course-detail-review/onlinelearning-course-detail-review.component';
import { OnlinelearningNavbarComponent } from './onlinelearning-navbar/onlinelearning-navbar.component';
import { OnlinelearningHomeComponent } from './onlinelearning-home/onlinelearning-home.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FinanceCentreLoanApplyComponent,
    FinanceCentreLoanProvidersComponent,
    OnlinelearningCourseDetailReviewComponent,
    OnlinelearningNavbarComponent,
    OnlinelearningHomeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
