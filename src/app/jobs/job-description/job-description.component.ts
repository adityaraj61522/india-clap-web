import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  jobId: number;
  jobObj: any;
  jobDescriptionForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private jobService: JobsService,
  ) {

    this.jobId = Number(this.route.snapshot.paramMap.get('jobId'));
    this.getJobDetails(this.jobId);

    this.jobDescriptionForm = new FormGroup({
      salary: new FormControl("", Validators.required),
      skills: new FormControl("", Validators.required),
      company_email: new FormControl("", Validators.required)
    });
  }

  getJobDetails(jobId: number) {
    this.jobService.get_job_description(jobId)
      .subscribe(respObj => {
        this.jobObj = { ...respObj };
      })
  }

  apply() {
    this.jobDescriptionForm.controls["salary"].markAsTouched();
    this.jobDescriptionForm.controls["skills"].markAsTouched();
    this.jobDescriptionForm.controls["company_email"].markAsTouched();

    if (!this.jobDescriptionForm.valid) return;

    this.jobService.apply_to_job(this.jobId, this.jobDescriptionForm.value)
      .subscribe(respObj => {
        console.log(respObj);
      })
  }


  ngOnInit() {
  }

}
