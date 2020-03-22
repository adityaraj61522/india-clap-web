import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalNetworkingComponent } from './professional-networking.component';
import { SomeoneElseProfileComponent } from './someone-else-profile/someone-else-profile.component';
import { MyProfileDropdownComponent } from './my-profile-dropdown/my-profile-dropdown.component';
import { TimelineLikeReactComponent } from './timeline-like-react/timeline-like-react.component';

const routes: Routes = [
  {
    path: '', component: ProfessionalNetworkingComponent,
    children: [
      { path: 'profiles', component: SomeoneElseProfileComponent },
      { path: 'my-profile', component: MyProfileDropdownComponent },
      { path: 'timeline-like-react', component: TimelineLikeReactComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalNetworkingRoutingModule { }
