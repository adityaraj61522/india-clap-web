import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalNetworkingRoutingModule } from './professional-networking-routing.module';
import { ProfessionalNetworkingComponent } from './professional-networking.component';


@NgModule({
  declarations: [ProfessionalNetworkingComponent],
  imports: [
    CommonModule,
    ProfessionalNetworkingRoutingModule
  ]
})
export class ProfessionalNetworkingModule { }
