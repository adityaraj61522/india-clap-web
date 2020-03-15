import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillTestComponent } from './skill-test/skill-test.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillTestComponent,
    SavedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
