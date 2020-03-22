import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinelearningCourseDetailReviewComponent } from './onlinelearning-course-detail-review/onlinelearning-course-detail-review.component';
import { OnlinelearningHomeComponent } from './onlinelearning-home/onlinelearning-home.component';
import { OnlineLearningComponent } from './online-learning.component';


const routes: Routes = [
  {
    path: '',
    component: OnlineLearningComponent,
    children: [
      {path:"course-detail",component:OnlinelearningCourseDetailReviewComponent},
      {path:'home',component:OnlinelearningHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineLearningRoutingModule { }
