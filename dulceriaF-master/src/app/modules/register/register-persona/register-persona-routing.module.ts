import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepersonaComponent } from './pages/createpersona/createpersona.component';

const routes: Routes = [
  {
    path: 'persona',
    component: CreatepersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPersonaRoutingModule { }
