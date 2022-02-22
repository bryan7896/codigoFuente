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
import { LedgerUploadsComponent } from './page/ledger-uploads/ledger-uploads.component';
import { AlersAndMessagesComponent } from './page/alers-and-messages/alers-and-messages.component';
import { CalendarComponent } from './page/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterestRatesComponent } from './page/interest-rates/interest-rates.component';
import { AdvancePaymentRequestsComponent } from './page/advance-payment-requests/advance-payment-requests.component';
import { PaymentExtensionRequestsComponent } from './page/payment-extension-requests/payment-extension-requests.component';
import { InvoiceComponent } from './page/invoice/invoice.component';
import { CreditNotesComponent } from './page/credit-notes/credit-notes.component';
import { ReportComponent } from './page/report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    CashflowComponent,
    DashboardComponent,
    PaymentNotificationComponent,
    CharLineHorizontalComponent,
    WeekPaymentForecastGraphicComponent,
    LedgerUploadsComponent,
    AlersAndMessagesComponent,
    CalendarComponent,
    InterestRatesComponent,
    AdvancePaymentRequestsComponent,
    PaymentExtensionRequestsComponent,
    InvoiceComponent,
    CreditNotesComponent,
    ReportComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
