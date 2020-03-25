import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  jobDescriptionForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }


  apply() {

  }

  ngOnInit() {
  }

}
