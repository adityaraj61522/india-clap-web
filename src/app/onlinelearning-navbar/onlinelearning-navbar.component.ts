import { Component, OnInit } from '@angular/core';
import { NavigationEnd,Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-onlinelearning-navbar',
  templateUrl: './onlinelearning-navbar.component.html',
  styleUrls: ['./onlinelearning-navbar.component.css']
})
export class OnlinelearningNavbarComponent implements OnInit {

  showLearningHeader:Boolean = false
  constructor(
    private router:Router,
    private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle('Online Learning | India Clap');
    this.router.events.subscribe((res:any)=>{
        console.log("hello")
        if( res instanceof NavigationEnd){
          //console.log(this.router.url)
          if(this.router.url.indexOf('/online-learning/course-detail')> -1||this.router.url.indexOf('/online-learning/home')> -1)
          {
            console.log(this.router.routerState)
            this.showLearningHeader=true;
          }
          else{
          //  console.log(this.router.routerState)
            this.showLearningHeader = false;
          }
        }
      })
  }

}
