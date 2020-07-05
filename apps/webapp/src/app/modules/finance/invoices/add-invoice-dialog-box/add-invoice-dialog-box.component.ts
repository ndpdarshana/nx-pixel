import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Invoice } from '../../../../models/invoice.model';

@Component({
  selector: 'pixels-add-invoice-dialog-box',
  templateUrl: './add-invoice-dialog-box.component.html'
})
export class AddInvoiceDialogBoxComponent{

  constructor(public dialogRef: MatDialogRef<AddInvoiceDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Invoice) { }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

}
