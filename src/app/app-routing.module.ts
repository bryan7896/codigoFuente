import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlersAndMessagesComponent } from './page/alers-and-messages/alers-and-messages.component';
import { CalendarComponent } from './page/calendar/calendar.component';
import { CashflowComponent } from './page/cashflow/cashflow.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { InterestRatesComponent } from './page/interest-rates/interest-rates.component';
import { LedgerUploadsComponent } from './page/ledger-uploads/ledger-uploads.component';
import {PaymentNotificationComponent} from "./page/payment-notification/payment-notification.component";
import {AdvancePaymentRequestsComponent} from "./page/advance-payment-requests/advance-payment-requests.component";
import {PaymentExtensionRequestsComponent} from "./page/payment-extension-requests/payment-extension-requests.component";
import {InvoiceComponent} from "./page/invoice/invoice.component";
import {CreditNotesComponent} from "./page/credit-notes/credit-notes.component";
import {ReportComponent} from "./page/report/report.component";


const routes: Routes = [
  { path: 'cashflow', component: CashflowComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'payment-notification', component: PaymentNotificationComponent },

  { path: 'LedgerUploads', component: LedgerUploadsComponent },
  { path: 'alersAndMessages', component: AlersAndMessagesComponent },
  { path: 'interestRates', component: InterestRatesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'advance-payment-requests', component: AdvancePaymentRequestsComponent },
  { path: 'payment-extension-requests', component: PaymentExtensionRequestsComponent },
  { path: 'invoices', component: InvoiceComponent },
  { path: 'credit-notes', component: CreditNotesComponent },
  { path: 'reports', component: ReportComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
