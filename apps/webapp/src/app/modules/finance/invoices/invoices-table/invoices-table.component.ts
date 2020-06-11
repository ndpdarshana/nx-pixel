import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Invoice } from '../../../../models/invoice.model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'pixels-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.scss']
})
export class InvoicesTableComponent implements OnInit, AfterViewInit {
  selection = new SelectionModel<Invoice>(true, []);
  @ViewChild(MatTable) table: MatTable<Invoice>;

  dataSource: MatTableDataSource<Invoice>;

  displayedColumns = ['select', 'to', 'amount_total', 'amount_balance', 'reminders', 'due_date', 'new_due_date', 'actions']

  @Input() invoices: Invoice[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.invoices);
  }

  ngAfterViewInit(){
    this.table.dataSource = this.dataSource;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Invoice): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
