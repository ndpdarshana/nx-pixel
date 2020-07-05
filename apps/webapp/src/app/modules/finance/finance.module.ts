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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddInvoiceDialogBoxComponent } from './invoices/add-invoice-dialog-box/add-invoice-dialog-box.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    FinanceComponent,
    InvoicesComponent,
    AccountInfoComponent,
    BalanceConsolComponent,
    PurchaseOrdersComponent,
    InvoicesTableComponent,
    TransactionsTableComponent,
    AddInvoiceDialogBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    FinanceComponent
  ]
})
export class FinanceModule { }
