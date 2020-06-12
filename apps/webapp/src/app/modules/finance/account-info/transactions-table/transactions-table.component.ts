import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Payment } from '../../../../models/payment.model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'pixels-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit, AfterViewInit {
  selection = new SelectionModel<Payment>(true, []);
  @ViewChild(MatTable) table: MatTable<Payment>;

  dataSource: MatTableDataSource<Payment>;

  displayedColumns = ['select', 'recieved', 'amount', 'date', 'comment', 'actions']

  @Input() payments: Payment[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.payments);
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

  checkboxLabel(row?: Payment): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
