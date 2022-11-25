import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LogComponent } from './pages/log/log.component';


@NgModule({
  declarations: [
    
    LogComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LogComponent
  ]
})
export class AuthModule { }
