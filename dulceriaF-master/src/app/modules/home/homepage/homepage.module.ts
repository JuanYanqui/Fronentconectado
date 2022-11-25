import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';



import { HomepagessComponent } from './pages/homepagess/homepagess.component';


@NgModule({
  declarations: [
    
    
    HomepagessComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  
  ],
  exports: [
   HomepagessComponent
  ]
})
export class HomepageModule { }
