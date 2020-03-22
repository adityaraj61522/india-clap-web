import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  jobDescriptionForm:FormGroup;
  constructor(private fb: FormBuilder,private router:Router) {
    this.jobDescriptionForm = new FormGroup({
      job_salary: new FormControl("", Validators.required),
      job_skills: new FormControl("", Validators.required),
      employer_email: new FormControl("", Validators.required)
    });
   }

   
   apply()
   {
    this.jobDescriptionForm.controls["job_salary"].markAsTouched();
    this.jobDescriptionForm.controls["job_skills"].markAsTouched();
    this.jobDescriptionForm.controls["employer_email"].markAsTouched();
   
    if(this.jobDescriptionForm.valid)
    {
      console.log(this.jobDescriptionForm.get('job_salary').value);
      console.log(this.jobDescriptionForm.get('job_skills').value);
      console.log(this.jobDescriptionForm.get('employer_email').value);
    }
   }

  ngOnInit() {
  }

}
