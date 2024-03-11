import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningComponent } from './common/components/opening/opening.component';
import { LoginComponent } from './common/components/login/login.component';
import { ForgetPasswordComponent } from './common/components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './common/components/reset-password/reset-password.component';
import { SignUpComponent } from './common/components/sign-up/sign-up.component';
import { CommonMainComponent } from './common/components/common-main/common-main.component';

@NgModule({
  declarations: [
    AppComponent,
    OpeningComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
    CommonMainComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
