import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-archive-job-search',
  templateUrl: './archive-job-search.component.html',
  styleUrls: ['./archive-job-search.component.css']
})
export class ArchiveJobSearchComponent implements OnInit {

  archiveJobSearchForm:FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.archiveJobSearchForm = new FormGroup({
      job_time: new FormControl("", Validators.required),
      job_type: new FormControl("", Validators.required),
     
    });
   }
   submit()
   {
    this.archiveJobSearchForm.controls["job_time"].markAsTouched();
    this.archiveJobSearchForm.controls["job_type"].markAsTouched();
    if(this.archiveJobSearchForm.valid)
    {
      console.log(this.archiveJobSearchForm.get('job_time').value);
      console.log(this.archiveJobSearchForm.get('job_type').value);
     
    }
   }
  ngOnInit() {
  }

}
