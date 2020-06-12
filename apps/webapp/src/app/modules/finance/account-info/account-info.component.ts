import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../models/payment.model';

@Component({
  selector: 'pixels-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  constructor() { }

  public payments: Payment[] = [
    {
      id: 1,
      recieved: "Lal LTD",
      usedFor: "Proj 1",
      source: "Eleementery client",
      amount: 400000,
      date: '12/05/2020',
      comment: 'Test record'
    },
    {
      id: 2,
      recieved: "Salalalala LTD",
      usedFor: "Proj 2",
      source: "Eleementery client",
      amount: 400000,
      date: '12/05/2020',
      comment: 'Test record'
    },
    {
      id: 3,
      recieved: "Wollongong HBR LTD",
      usedFor: "Proj 2",
      source: "Eleementery client",
      amount: 400000,
      date: '12/05/2020',
      comment: 'Test record'
    }
  ]
  ngOnInit(): void {
  }

}
