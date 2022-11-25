import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { WelcomeHomeComponent } from './modules/home/welcome-home/welcome-home.component';
import { WelcomeRegisterComponent } from './modules/register/welcome-register/welcome-register.component';

const routes: Routes = [
 

  {
    path: '',// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: WelcomeHomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) // se importa un modulo que tiene routing es decir ruta 

  },

  {
    path: 'register', //TODO (Public) Login, Register, Forgot...
    loadChildren: () => import(`./modules/register/register-user/register.module`).then(m => m.RegisterModule)
  },

  {
    path: 'registerp', //TODO (Public) Login, Register, Forgot...
    loadChildren: () => import(`./modules/register/register-persona/register-persona.module`).then(m => m.RegisterPersonaModule)
  },
  {
    path: 'register',
    component: WelcomeRegisterComponent,
    loadChildren: ()=> import('./modules/register/register.module').then(m=>m.RegisterModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
