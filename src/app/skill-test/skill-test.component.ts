import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-test',
  templateUrl: './skill-test.component.html',
  styleUrls: ['./skill-test.component.css']
})
export class SkillTestComponent implements OnInit {

  testForm: FormGroup;
  testName:any;
  namevalidation: boolean=false;
  checkNum:number=1;


  constructor(private fb: FormBuilder,private router:Router) {
    this.testForm = new FormGroup({
      test_name: new FormControl("", Validators.required),
    });
   }
   checkboxValidation(num:any)
   {
     this.checkNum=num
    //  console.log(this.checkNum);
   }
   submit()
   {
    this.testForm.controls["test_name"].markAsTouched();
    console.log(this.checkNum);
     if(this.testForm.valid)
     {
      this.testName=this.testForm.get('test_name').value;
      this.namevalidation=false;
     }
     else
     this.namevalidation = true;
     console.log(this.testName);
   }
  ngOnInit() {
  }
   
}
