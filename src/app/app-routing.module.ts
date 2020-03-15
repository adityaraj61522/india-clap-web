import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillTestComponent } from './skill-test/skill-test.component';


const routes: Routes = [{
  path: '', redirectTo: 'take-test', pathMatch: 'full'
}, {
  path: 'take-test', component: SkillTestComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
