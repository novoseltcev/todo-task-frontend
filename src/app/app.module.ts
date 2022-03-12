import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RecoveryComponent,
    ResetPasswordComponent,
    RegisterComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
