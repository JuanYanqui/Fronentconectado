import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { WelcomeRegisterComponent } from './welcome-register/welcome-register.component';
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class RegisterModule { }
