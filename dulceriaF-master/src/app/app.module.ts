import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaService } from './modules/services/persona.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatepersonaComponent } from './modules/register/register-persona/pages/createpersona/createpersona.component';
import { CreateuserComponent } from './modules/register/register-user/pages/createuser/createuser.component';
@NgModule({
  declarations: [
    AppComponent,CreatepersonaComponent, CreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
