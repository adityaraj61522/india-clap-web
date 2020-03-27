import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  jobSearch()
  {
  this.router.navigate(['/jobs/instant-apply-search'])
  }
  archiveJobSearch()
  {
    this.router.navigate(['/jobs/archive-job-search'])

  }
  skillCourseSearch()
  {
    this.router.navigate(['/offline-learning/skill-courses-results'])

  }
}
