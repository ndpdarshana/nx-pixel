import { Component, OnInit } from '@angular/core';

import { AddTimecardDialogBoxComponent } from './add-timecard-dialog-box/add-timecard-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Timecard } from './timecard.model';

@Component({
  selector: 'pixels-timecards',
  templateUrl: './timecards.component.html',
  styleUrls: ['./timecards.component.scss']
})
export class TimecardsComponent implements OnInit {

  newTimecard: Timecard = null;
  timecards: Timecard[] = [
    {id: 1, project: "proj 1", date: new Date()},
    {id: 2, project: "proj 2", date: new Date()},
    {id: 3, project: "proj 3", date: new Date()},
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddTimecardDialog(): void{
    this.newTimecard = new Timecard();
    const dialogRef = this.dialog.open(AddTimecardDialogBoxComponent, {
      width: '250px',
      data: this.newTimecard
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
