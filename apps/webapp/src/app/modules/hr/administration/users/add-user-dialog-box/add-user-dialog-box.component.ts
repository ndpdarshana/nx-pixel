import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.model';

@Component({
  selector: 'pixels-add-user-dialog-box',
  templateUrl: './add-user-dialog-box.component.html',
  styleUrls: ['./add-user-dialog-box.component.scss']
})
export class AddUserDialogBoxComponent{

  constructor(public dialogRef: MatDialogRef<AddUserDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
