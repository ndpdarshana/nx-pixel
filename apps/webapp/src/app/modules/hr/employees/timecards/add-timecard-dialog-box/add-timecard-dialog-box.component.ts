import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Timecard } from '../../../../../models/timecard.model';

@Component({
  selector: 'pixels-add-timecard-dialog-box',
  templateUrl: './add-timecard-dialog-box.component.html'
})
export class AddTimecardDialogBoxComponent{

  constructor(public dialogRef: MatDialogRef<AddTimecardDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Timecard) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
