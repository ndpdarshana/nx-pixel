import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveAbsence } from '../../../../../models/leave-absence.model';
import { Leavetype } from '../../../../../models/leaveType.model';

@Component({
  selector: 'pixels-apply-leave-dialog-box',
  templateUrl: './apply-leave-dialog-box.component.html'
})
export class ApplyLeaveDialogBoxComponent{

  leaveTypes: Leavetype[] = [
    {id:1, name:'Anual Leave'},
    {id:2, name:'Medical Leave'},
    {id:3, name:'Subbatical Leave'},
    {id:4, name:'Casual Leave'}
  ]

  constructor(public dialogRef: MatDialogRef<ApplyLeaveDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LeaveAbsence) { }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

}
