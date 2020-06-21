import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AddTimecardDialogBoxComponent } from './add-timecard-dialog-box/add-timecard-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Timecard } from '../../../../models/timecard.model';

@Component({
  selector: 'pixels-timecards',
  templateUrl: './timecards.component.html',
  styleUrls: ['./timecards.component.scss']
})
export class TimecardsComponent implements OnInit {
  // datePipeStr:string;

  constructor(
    public dialog: MatDialog, 
    private datePipe: DatePipe
    ) { }

  newTimecard: Timecard = null;
  timecards: Timecard[] = [
    {
      id: 1, 
      project: "proj 1", 
      dateIn: this.datePipe.transform(new Date().setHours(new Date().getHours() - 72), 'mediumDate'),
      timeIn: this.datePipe.transform(new Date().setHours(new Date().getHours() - 2), 'mediumTime'), 
      timeOut: this.datePipe.transform(new Date().setHours(new Date().getHours() + 6), 'mediumTime'),
      comment: "Test comment"
    },
    {
      id: 2, 
      project: "proj 2", 
      dateIn: this.datePipe.transform(new Date().setHours(new Date().getHours() - 48), 'mediumDate'),
      timeIn: this.datePipe.transform(new Date(), 'mediumTime'), 
      timeOut: this.datePipe.transform(new Date(), 'mediumTime'),
      comment: "Test comment"
    },
    {
      id: 3, 
      project: "proj 3", 
      dateIn: this.datePipe.transform(new Date().setHours(new Date().getHours() - 24), 'mediumDate'),
      timeIn: this.datePipe.transform(new Date().setHours(new Date().getHours() - 3), 'mediumTime'), 
      timeOut: this.datePipe.transform(new Date().setHours(new Date().getHours() + 6), 'mediumTime'),
      comment: "Test comment"
    }
  ]  

  ngOnInit(): void {
  }

  openAddTimecardDialog(): void{
    this.newTimecard = new Timecard();
    this.newTimecard.dateIn = this.datePipe.transform(new Date(), 'mediumDate');
    const dialogRef = this.dialog.open(AddTimecardDialogBoxComponent, {
      width: '250px',
      data: this.newTimecard
    });

    dialogRef.afterClosed().subscribe(result => {
      const timecard = {
        id: 4, 
        project: this.newTimecard.project, 
        dateIn: this.datePipe.transform(new Date(), 'mediumDate'),
        timeIn: this.datePipe.transform(new Date(), 'mediumTime'), 
        timeOut: null,
        comment: this.newTimecard.comment
      }
      this.timecards = [...this.timecards, timecard];
    });
  }
}
