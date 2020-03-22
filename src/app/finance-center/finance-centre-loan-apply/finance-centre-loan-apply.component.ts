import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-finance-centre-loan-apply',
  templateUrl: './finance-centre-loan-apply.component.html',
  styleUrls: ['./finance-centre-loan-apply.component.css']
})
export class FinanceCentreLoanApplyComponent implements OnInit {

  applyLoan:Boolean = false;
  obj:any={};
  stateValidation:Boolean = false;
  districtValidation:Boolean = false;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  
  submit()
  {
  //  this.obj.state = _state;
  //  this.obj.district = _district;
  // console.log("hello")
  if(!this.obj.state)
  this.stateValidation=true;
  else
  this.stateValidation=false;
  if(!this.obj.district)
  this.districtValidation=true;
  else
  this.districtValidation=false;

   console.log(this.obj);
  }
}
