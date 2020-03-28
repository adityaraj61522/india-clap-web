import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {JobsService} from './../../services/jobs.service';
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
  obj:any={};

  constructor(private fb: FormBuilder,private router:Router,private jService:JobsService) {
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
      this.obj.name=this.testName;
      if(this.checkNum==1)
      this.obj.level = 'E'
      else if(this.checkNum==2)
      this.obj.level = 'I'
      else
      this.obj.level = 'A'
      console.log(this.obj);
      this.jService.skill_test(this.obj).subscribe((data:any)=>{
       console.log(data);
      })
     }
     else
     this.namevalidation = true;
   }
  ngOnInit() {
  }
   
}
