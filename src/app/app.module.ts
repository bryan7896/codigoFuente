import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashflowComponent } from './page/cashflow/cashflow.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PaymentNotificationComponent } from './page/payment-notification/payment-notification.component';
import {NgChartsModule} from "ng2-charts";
import { CharLineHorizontalComponent } from './page/graphics/char-line-horizontal/char-line-horizontal.component';
import { WeekPaymentForecastGraphicComponent } from './page/graphics/week-payment-forecast-graphic/week-payment-forecast-graphic.component';



@NgModule({
  declarations: [
    AppComponent,
    CashflowComponent,
    DashboardComponent,
    PaymentNotificationComponent,
    CharLineHorizontalComponent,
    WeekPaymentForecastGraphicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
