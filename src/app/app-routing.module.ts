import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {RecoveryComponent} from "./recovery/recovery.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
