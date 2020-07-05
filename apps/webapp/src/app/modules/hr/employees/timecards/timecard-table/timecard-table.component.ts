import { Component, OnInit, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Timecard } from '../../../../../models/timecard.model';

@Component({
  selector: 'pixels-timecard-table',
  templateUrl: './timecard-table.component.html',
  styleUrls: ['./timecard-table.component.scss']
})
export class TimecardTableComponent implements OnInit, AfterViewInit, OnChanges{
  @ViewChild(MatTable) table: MatTable<Timecard>;

  dataSource: MatTableDataSource<Timecard>;

  displayedColumns = ['id', 'project', 'dateIn', 'timeIn', 'timeOut', 'comment', 'actions']

  @Input() timecards: Timecard[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.timecards);
  }

  ngAfterViewInit(){
    this.table.dataSource = this.dataSource;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.dataSource){
      this.dataSource.data = this.timecards;  
    }    
  }
}