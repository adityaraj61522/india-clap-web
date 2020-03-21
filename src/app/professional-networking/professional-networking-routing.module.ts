import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalNetworkingComponent } from './professional-networking.component';

const routes: Routes = [{ path: '', component: ProfessionalNetworkingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalNetworkingRoutingModule { }
