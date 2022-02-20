import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlersAndMessagesComponent } from './page/alers-and-messages/alers-and-messages.component';
import { CalendarComponent } from './page/calendar/calendar.component';
import { CashflowComponent } from './page/cashflow/cashflow.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LedgerUploadsComponent } from './page/ledger-uploads/ledger-uploads.component';
import {PaymentNotificationComponent} from "./page/payment-notification/payment-notification.component";


const routes: Routes = [
  { path: 'cashflow', component: CashflowComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'payment-notification', component: PaymentNotificationComponent },
  
  { path: 'LedgerUploads', component: LedgerUploadsComponent },
  { path: 'alersAndMessages', component: AlersAndMessagesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
