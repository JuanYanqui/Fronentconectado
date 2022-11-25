import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { HomepagessComponent } from './homepage/pages/homepagess/homepagess.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [

    WelcomeHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule
  ],
  
})
export class HomeModule { }
