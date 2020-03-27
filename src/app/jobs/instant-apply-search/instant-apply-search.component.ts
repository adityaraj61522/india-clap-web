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
      salary: new FormControl("", Validators.required),
      location_State: new FormControl("", Validators.required),
      location_District: new FormControl("", Validators.required),
      starting_time: new FormControl("", Validators.required),
      end_time: new FormControl("", Validators.required),
    });
   }
   submit()
   {
    this.instantApplyForm.controls["salary"].markAsTouched();
    this.instantApplyForm.controls["location_State"].markAsTouched();
    this.instantApplyForm.controls["location_District"].markAsTouched();
    this.instantApplyForm.controls["starting_time"].markAsTouched();
    this.instantApplyForm.controls["end_time"].markAsTouched();
    if(this.instantApplyForm.valid)
    {
      console.log(this.instantApplyForm.get('salary').value);
      console.log(this.instantApplyForm.get('location_State').value);
      console.log(this.instantApplyForm.get('location_District').value);
      console.log(this.instantApplyForm.get('starting_time').value);
      console.log(this.instantApplyForm.get('end_time').value);
     
    }
   }

  ngOnInit() {
  }

}
