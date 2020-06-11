import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InvoicesComponent } from './invoices/invoices.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { BalanceConsolComponent } from './balance-consol/balance-consol.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';



@NgModule({
  declarations: [
    FinanceComponent,
    InvoicesComponent,
    AccountInfoComponent,
    BalanceConsolComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    FinanceComponent
  ]
})
export class FinanceModule { }
