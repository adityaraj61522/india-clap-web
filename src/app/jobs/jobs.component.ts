import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  hideBanner: boolean = false;

  constructor(
    private title: Title,
    private router: Router
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url.includes('/jobs/description')) {
          this.hideBanner = true;
        }
        else this.hideBanner = false;
      })
  }

  ngOnInit() {
    this.title.setTitle('Jobs | India Clap');
  }

}
