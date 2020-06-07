import { Component, OnInit } from '@angular/core';
import { LeaveAbsence } from '../../../../models/leave-absence.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pixels-leaves-absences',
  templateUrl: './leaves-absences.component.html',
  styleUrls: ['./leaves-absences.component.scss']
})
export class LeavesAbsencesComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }

  leaves: LeaveAbsence[] = [
    {
      id: 1, 
      date: this.datePipe.transform(new Date(), 'mediumDate'), 
      leaveType: "Sick Leave",
      note: "Test comment"
    },{ 
      id: 2, 
      date: this.datePipe.transform(new Date(), 'mediumDate'), 
      leaveType: "Anual Leave",
      note: "Test comment"
    },{ 
      id: 1, 
      date: this.datePipe.transform(new Date(), 'mediumDate'), 
      leaveType: "Anual Leave",
      note: "Test comment"
    }
  ]  


  ngOnInit(): void {
  }

}
