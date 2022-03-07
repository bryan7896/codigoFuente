import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRecoveryComponent } from './account-recovery.component';
import { AccountRecoveryRoutingModule } from './account-recovery-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AccountRecoveryComponent
  ],
  imports: [
    CommonModule,
    AccountRecoveryRoutingModule,
    SharedModule
  ],
  exports: [
    AccountRecoveryComponent
  ]
})
export class AccountRecoveryModule { }
