import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillTestComponent } from './skill-test/skill-test.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';


const routes: Routes = [
  { path: '', redirectTo: 'take-test', pathMatch: 'full' },
  { path: 'take-test', component: SkillTestComponent },
  { path: 'saved-jobs', component: SavedJobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
