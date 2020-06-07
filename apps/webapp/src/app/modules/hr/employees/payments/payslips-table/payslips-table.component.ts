import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Payslip } from '../payslip.model';

@Component({
  selector: 'pixels-payslips-table',
  templateUrl: './payslips-table.component.html',
  styleUrls: ['./payslips-table.component.css']
})
export class PayslipsTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<Payslip>;

  dataSource: MatTableDataSource<Payslip>;

  displayedColumns = ['id', 'dateOfPayment', 'payPeriod', 'actions']

  @Input() payslips: Payslip[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.payslips);
  }

  ngAfterViewInit(){
    this.table.dataSource = this.dataSource;
  }

}
