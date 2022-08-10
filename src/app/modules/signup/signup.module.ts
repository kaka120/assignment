import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';

import { SignupRoutingModule } from './signup-routing.module';
//import { AppComponent } from './app.component';
//import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';
import { authService } from '../../data/service/authService.service';

@NgModule({
  declarations: [
    //AppComponent,
    //LoginComponent,
    SignupComponent
  ],
  imports: [
    //BrowserModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authService],
  bootstrap: [SignupComponent]
})
export class SignupModule { }
