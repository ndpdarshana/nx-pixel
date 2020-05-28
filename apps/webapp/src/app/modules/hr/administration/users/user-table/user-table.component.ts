import { AfterViewInit, Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges} from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserTableDataSource } from './user-table-datasource';
import { User } from '../user.model';

@Component({
  selector: 'pixels-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit, OnInit, OnChanges{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
  // dataSource: UserTableDataSource;
  dataSource: MatTableDataSource<User>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email'];

  @Input() users!: User[];

  ngOnInit() {
    // this.dataSource = new UserTableDataSource();
    this.dataSource = new MatTableDataSource(this.users);    
    // this.dataSource.setDatasource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.dataSource){
      this.dataSource.data = this.users;  
    }    
  }
}
