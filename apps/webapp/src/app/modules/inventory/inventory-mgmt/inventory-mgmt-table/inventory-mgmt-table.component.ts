import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Inventory } from '../../../../models/inventory.model';

@Component({
  selector: 'pixels-inventory-mgmt-table',
  templateUrl: './inventory-mgmt-table.component.html',
  styleUrls: ['./inventory-mgmt-table.component.css']
})
export class InventoryMgmtTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<Inventory>;

  dataSource: MatTableDataSource<Inventory>;

  displayedColumns = ['id', 'name', 'category', 'description', 'supplier', 'note', 'actions']

  @Input() inventory: Inventory[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.inventory);
  }

  ngAfterViewInit(){
    this.table.dataSource = this.dataSource;
  }

}
