import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'persona',
    loadChildren: () => import("./register-persona/register-persona.module").then(m => m.RegisterPersonaModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import("./register-user/register.module").then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
