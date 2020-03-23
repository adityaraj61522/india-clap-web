import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offline-learning',
  templateUrl: './offline-learning.component.html',
  styleUrls: ['./offline-learning.component.css']
})
export class OfflineLearningComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Offline Learning | India Clap');
  }

}
