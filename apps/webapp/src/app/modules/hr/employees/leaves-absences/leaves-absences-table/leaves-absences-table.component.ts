import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { LeaveAbsence } from '../leave-absence.model';
import { MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'pixels-leaves-absences-table',
  templateUrl: './leaves-absences-table.component.html',
  styleUrls: ['./leaves-absences-table.component.css']
})
export class LeavesAbsencesTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<LeaveAbsence>;

  dataSource: MatTableDataSource<LeaveAbsence>;

  displayedColumns = ['id', 'date', 'leaveType', 'note', 'actions']

  @Input() leaves: LeaveAbsence[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.leaves);
  }

  ngAfterViewInit(){
    this.table.dataSource = this.dataSource;
  }

}