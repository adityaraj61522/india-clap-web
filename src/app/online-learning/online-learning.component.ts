import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-learning',
  templateUrl: './online-learning.component.html',
  styleUrls: ['./online-learning.component.css']
})
export class OnlineLearningComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Online Learning | India Clap');
  }

}
