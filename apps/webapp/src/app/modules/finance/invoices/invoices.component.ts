import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../models/invoice.model';
import { AddInvoiceDialogBoxComponent } from './add-invoice-dialog-box/add-invoice-dialog-box.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'pixels-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  newItem: Invoice = null
  invoices: Invoice[] = [{
    id: 1001,
    to: "Kendy LTD",
    amount_total: 1000,
    amount_balance: 5000,
    reminders: 0,
    due_date: '7/04/2020',
    new_due_date: ''
  }, {
    id: 1002,
    to: "Lula LTD",
    amount_total: 450000,
    amount_balance: 15000,
    reminders: 1,
    due_date: '23/03/2020',
    new_due_date: '08/04/2020'
  }, {
    id: 1003,
    to: "MWISHO LTD",
    amount_total: 36000,
    amount_balance: 43000,
    reminders: 2,
    due_date: '9/03/2020',
    new_due_date: '10/04/2020'
  }]

  ngOnInit(): void {
  }

  openAddInvoiceDialog(): void{
    this.newItem = new Invoice();
    const dialogRef = this.dialog.open(AddInvoiceDialogBoxComponent, {
      width: '250px',
      data: this.newItem
    });

    dialogRef.afterClosed().subscribe(result => {
      const item = {
        id: 1003,
        to: "MWISHO LTD",
        amount_total: 36000,
        amount_balance: 43000,
        reminders: 2,
        due_date: '9/03/2020',
        new_due_date: '10/04/2020'
      }
      this.invoices = [...this.invoices, this.newItem];
    });
  }
}
