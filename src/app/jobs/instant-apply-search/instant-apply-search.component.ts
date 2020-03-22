import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instant-apply-search',
  templateUrl: './instant-apply-search.component.html',
  styleUrls: ['./instant-apply-search.component.css']
})
export class InstantApplySearchComponent implements OnInit {

  instantApplyForm:FormGroup;
  constructor(private fb: FormBuilder,private router:Router) {
    this.instantApplyForm = new FormGroup({
      job_name: new FormControl("", Validators.required),
      job_state: new FormControl("", Validators.required),
      job_district: new FormControl("", Validators.required),
      job_from: new FormControl("", Validators.required),
      job_to: new FormControl("", Validators.required),
    });
   }
   submit()
   {
    this.instantApplyForm.controls["job_name"].markAsTouched();
    this.instantApplyForm.controls["job_state"].markAsTouched();
    this.instantApplyForm.controls["job_district"].markAsTouched();
    this.instantApplyForm.controls["job_from"].markAsTouched();
    this.instantApplyForm.controls["job_to"].markAsTouched();
    if(this.instantApplyForm.valid)
    {
      console.log(this.instantApplyForm.get('job_name').value);
      console.log(this.instantApplyForm.get('job_state').value);
      console.log(this.instantApplyForm.get('job_district').value);
      console.log(this.instantApplyForm.get('job_from').value);
      console.log(this.instantApplyForm.get('job_to').value);
     
    }
   }

  ngOnInit() {
  }

}
