import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalNetworkingRoutingModule } from './professional-networking-routing.module';
import { ProfessionalNetworkingComponent } from './professional-networking.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';


@NgModule({
  declarations: [ProfessionalNetworkingComponent, HomePageComponent, LoginPageComponent, RegistrationPageComponent, ForgotPasswordPageComponent, ResetPasswordPageComponent],
  imports: [
    CommonModule,
    ProfessionalNetworkingRoutingModule
  ]
})
export class ProfessionalNetworkingModule { }
