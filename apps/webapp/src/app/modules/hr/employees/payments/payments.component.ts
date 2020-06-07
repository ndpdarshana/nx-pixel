import { Component, OnInit } from '@angular/core';
import { Payslip } from './payslip.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pixels-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(public datePipe: DatePipe) { }

  payslips: Payslip[] = [
    {
      id: 1, 
      dateOfPayment: this.datePipe.transform(new Date(), 'mediumDate'), 
      payPeriod: "1st Mar - 31 Mar"
    },{ 
      id: 2, 
      dateOfPayment: this.datePipe.transform(new Date(), 'mediumDate'), 
      payPeriod: "1st Apr - 30 Apr"
    },{ 
      id: 3, 
      dateOfPayment: this.datePipe.transform(new Date(), 'mediumDate'), 
      payPeriod: "1st May - 31 May"
    }
  ]  

  ngOnInit(): void {
  }

}
