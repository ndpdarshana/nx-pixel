import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inventory } from '../../../../models/inventory.model';

@Component({
  selector: 'pixels-apply-leave-dialog-box',
  templateUrl: './add-item-dialog-box.component.html'
})
export class AddItemDialogBoxComponent{

  constructor(public dialogRef: MatDialogRef<AddItemDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inventory) { }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

}
