import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Timecard } from '../timecard.model';

@Component({
  selector: 'pixels-timecard-table',
  templateUrl: './timecard-table.component.html',
})
export class TimecardTableComponent implements OnInit, AfterViewInit{
  @ViewChild(MatTable) table: MatTable<Timecard>;

  dataSource: MatTableDataSource<Timecard>;

  displayedColumns = ['id', 'project', 'date']

  @Input() timecards: Timecard[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.timecards);
  }

  ngAfterViewInit(){
    this.table.dataSource = this.dataSource;
  }

}