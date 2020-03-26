import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent implements OnInit {

  jobId: number;
  jobObj: any;

  companyId: number;
  companyObj: any;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobsService
  ) {
    this.jobId = Number(this.route.snapshot.paramMap.get('jobId'));
    this.getJobDetails(this.jobId);
  }

  ngOnInit() {
  }

  getJobDetails(jobId: number) {
    this.jobService.get_job_description(jobId)
      .subscribe(respObj => {
        this.jobObj = { ...respObj };
        this.companyId = this.jobObj['company'];
        this.getCompanyDetails();
      })
  }

  getCompanyDetails() {
    this.jobService.get_company_details(this.companyId)
      .subscribe(respObj => {
        this.companyObj = { ...respObj };
      })
  }

}
