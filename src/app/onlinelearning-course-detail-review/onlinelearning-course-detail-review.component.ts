import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlinelearning-course-detail-review',
  templateUrl: './onlinelearning-course-detail-review.component.html',
  styleUrls: ['./onlinelearning-course-detail-review.component.css']
})
export class OnlinelearningCourseDetailReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  like()
  {
    console.log("like")
  }
  comment()
  {
    console.log("comment")
  }
  react()
  {
    console.log("react")
  }
  report()
  {
    console.log("report")
  }
}
