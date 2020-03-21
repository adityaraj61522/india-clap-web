import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalNetworkingRoutingModule } from './professional-networking-routing.module';
import { ProfessionalNetworkingComponent } from './professional-networking.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [ProfessionalNetworkingComponent, HomePageComponent],
  imports: [
    CommonModule,
    ProfessionalNetworkingRoutingModule
  ]
})
export class ProfessionalNetworkingModule { }
