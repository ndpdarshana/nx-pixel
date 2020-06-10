import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Inventory } from '../../../../models/inventory.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'pixels-inventory-mgmt-table',
  templateUrl: './inventory-mgmt-table.component.html',
  styleUrls: ['./inventory-mgmt-table.component.css']
})
export class InventoryMgmtTableComponent implements OnInit, AfterViewInit {
  selection = new SelectionModel<Inventory>(true, []);
  @ViewChild(MatTable) table: MatTable<Inventory>;

  dataSource: MatTableDataSource<Inventory>;

  displayedColumns = ['select', 'name', 'category', 'description', 'supplier', 'note', 'actions']

  @Input() inventory: Inventory[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.inventory);
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

  checkboxLabel(row?: Inventory): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
