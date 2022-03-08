import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRecoveryComponent } from './account-recovery.component';
import { AccountRecoveryRoutingModule } from './account-recovery-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {ForgotPasswordComponent} from "./partials/forgotPassword/forgot-password.component";
import { ForgotUsernameComponent } from './partials/forgot-username/forgot-username.component';
import {RecaptchaModule} from "ng-recaptcha";

@NgModule({
  declarations: [
    AccountRecoveryComponent,
    ForgotPasswordComponent,
    ForgotUsernameComponent
  ],
  imports: [
    CommonModule,
    AccountRecoveryRoutingModule,
    SharedModule,

  ],
  exports: [
    AccountRecoveryComponent
  ]
})
export class AccountRecoveryModule { }
