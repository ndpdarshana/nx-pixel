import { Component, OnInit } from '@angular/core';
import { LeaveAbsence } from '../../../../models/leave-absence.model';

import { MatDialog } from '@angular/material/dialog';

import { DatePipe } from '@angular/common';
import { ApplyLeaveDialogBoxComponent } from './apply-leave-dialog-box/apply-leave-dialog-box.component';

@Component({
  selector: 'pixels-leaves-absences',
  templateUrl: './leaves-absences.component.html',
  styleUrls: ['./leaves-absences.component.scss']
})
export class LeavesAbsencesComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private datePipe: DatePipe
  ) { }

  newLeaveAbsence: LeaveAbsence = null
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
      id: 3, 
      date: this.datePipe.transform(new Date(), 'mediumDate'), 
      leaveType: "Anual Leave",
      note: "Test comment"
    }
  ]  

  ngOnInit(): void {
  }

  openApplyLeaveDialog(): void{
    this.newLeaveAbsence = new LeaveAbsence();
    const dialogRef = this.dialog.open(ApplyLeaveDialogBoxComponent, {
      width: '250px',
      data: this.newLeaveAbsence
    });

    dialogRef.afterClosed().subscribe(result => {
      const leave = {
        id: 4, 
        date: this.datePipe.transform(new Date(), 'mediumDate'), 
        leaveType: this.newLeaveAbsence.leaveType,
        note: this.newLeaveAbsence.note
      }
      this.leaves = [...this.leaves, leave];
    });
  }
}
