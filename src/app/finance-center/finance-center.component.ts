import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-finance-center',
  templateUrl: './finance-center.component.html',
  styleUrls: ['./finance-center.component.css']
})
export class FinanceCenterComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Finance Center | India Clap');
  }

}
