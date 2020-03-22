import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineLearningRoutingModule } from './online-learning-routing.module';
import { OnlineLearningComponent } from './online-learning.component';
import { OnlinelearningCourseDetailReviewComponent } from './onlinelearning-course-detail-review/onlinelearning-course-detail-review.component';
import { OnlinelearningHomeComponent } from './onlinelearning-home/onlinelearning-home.component';
import { SharedModule } from '../shared/shared.module';
import { OnlinelearningNavbarComponent } from '../onlinelearning-navbar/onlinelearning-navbar.component';


@NgModule({
  declarations: [
    OnlineLearningComponent,
    OnlinelearningCourseDetailReviewComponent,
    OnlinelearningHomeComponent,
    OnlinelearningNavbarComponent],
  imports: [
    CommonModule,
    OnlineLearningRoutingModule,
    SharedModule
  ]
})
export class OnlineLearningModule { }
