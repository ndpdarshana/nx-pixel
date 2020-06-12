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
import { InvoicesTableComponent } from './invoices/invoices-table/invoices-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TransactionsTableComponent } from './account-info/transactions-table/transactions-table.component';



@NgModule({
  declarations: [
    FinanceComponent,
    InvoicesComponent,
    AccountInfoComponent,
    BalanceConsolComponent,
    PurchaseOrdersComponent,
    InvoicesTableComponent,
    TransactionsTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    FinanceComponent
  ]
})
export class FinanceModule { }
