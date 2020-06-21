import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveAbsence } from '../../../../../models/leave-absence.model';

@Component({
  selector: 'pixels-apply-leave-dialog-box',
  templateUrl: './apply-leave-dialog-box.component.html'
})
export class ApplyLeaveDialogBoxComponent{

  constructor(public dialogRef: MatDialogRef<ApplyLeaveDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LeaveAbsence) { }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

}
