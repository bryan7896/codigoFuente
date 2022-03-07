import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';
import { LanguageSelectorModule } from 'src/app/components/language-selector/language-selector.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    LanguageSelectorModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
