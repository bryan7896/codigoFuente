import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRecoveryComponent } from './account-recovery.component';
import { AccountRecoveryRoutingModule } from './account-recovery-routing.module';

@NgModule({
  declarations: [
    AccountRecoveryComponent
  ],
  imports: [
    CommonModule,
    AccountRecoveryRoutingModule
  ],
  exports: [
    AccountRecoveryComponent
  ]
})
export class AccountRecoveryModule { }
