import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  toJobSearch(){
     this.router.navigate(['/jobs/instant-apply-search'])
   }
   toArchiveSearch()
   {
    this.router.navigate(['/jobs/archive-job-search/'])
   }
}
