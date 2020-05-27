import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'pixels-add-user-dialog-box',
  templateUrl: './add-user-dialog-box.component.html',
  styleUrls: ['./add-user-dialog-box.component.scss']
})
export class AddUserDialogBoxComponent{

  animal: string;
  name: string;

  constructor(public dialogRef: MatDialogRef<AddUserDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
