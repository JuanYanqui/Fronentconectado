import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagessComponent } from './pages/homepagess/homepagess.component';



const routes: Routes = [
  {
    path:'',
    component: HomepagessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
