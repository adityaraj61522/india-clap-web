import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  jobPostForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.jobPostForm = new FormGroup({
      name: new FormControl("", Validators.required),
      job_role: new FormControl("", Validators.required),
      job_title: new FormControl("", Validators.required),
      desc: new FormControl("", Validators.required),
      salary_range: new FormControl("", Validators.required),
      skills_required: new FormControl("", Validators.required),
      emp_email: new FormControl("", Validators.required),

    });
   }
   submit()
   {
    this.jobPostForm.controls["name"].markAsTouched();
    this.jobPostForm.controls["job_role"].markAsTouched();
    this.jobPostForm.controls["job_title"].markAsTouched();
    this.jobPostForm.controls["desc"].markAsTouched();
    this.jobPostForm.controls["salary_range"].markAsTouched();
    this.jobPostForm.controls["skills_required"].markAsTouched();
    this.jobPostForm.controls["emp_email"].markAsTouched();
    if(this.jobPostForm.valid)
    {
      console.log(this.jobPostForm.get('name').value);
      console.log(this.jobPostForm.get('job_role').value);
      console.log(this.jobPostForm.get('job_title').value);
      console.log(this.jobPostForm.get('desc').value);
      console.log(this.jobPostForm.get('salary_range').value);
      console.log(this.jobPostForm.get('skills_required').value);
      console.log(this.jobPostForm.get('emp_email').value);


    }
   }
  ngOnInit() {
  }

}
