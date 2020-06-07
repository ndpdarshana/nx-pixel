import { AfterViewInit, Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges} from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserTableDataSource } from './user-table-datasource';
import { User } from '../user.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'pixels-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit, OnInit, OnChanges{
  selection = new SelectionModel<User>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
  // TODO Use custom datasource instead od MatTableDatasource
  // dataSource: UserTableDataSource;
  dataSource: MatTableDataSource<User>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'id', 'name', 'email'];

  @Input() users!: User[];

  ngOnInit() {
    // this.dataSource = new UserTableDataSource();
    this.dataSource = new MatTableDataSource(this.users);    
    // this.dataSource.setDatasource(this.users);
  }

  ngAfterViewInit() {
    // KNOWN ISSUE: New data rows are not affected by sorting alogorithm
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.dataSource){
      this.dataSource.data = this.users;  
    }    
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

  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
