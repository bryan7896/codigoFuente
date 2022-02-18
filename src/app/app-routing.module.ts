import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashflowComponent } from './page/cashflow/cashflow.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import {PaymentNotificationComponent} from "./page/payment-notification/payment-notification.component";


const routes: Routes = [
  { path: 'cashflow', component: CashflowComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'payment-notification', component: PaymentNotificationComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
