import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../../models/inventory.model';

import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogBoxComponent } from './add-item-dialog-box/apply-leave-dialog-box.component';

@Component({
  selector: 'pixels-inventory-mgmt',
  templateUrl: './inventory-mgmt.component.html',
  styleUrls: ['./inventory-mgmt.component.css']
})
export class InventoryMgmtComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  newItem: Inventory = null;
  inventory: Inventory[] = [
    {
      id: 1,
      name: "Test inventory",
      category: "This cat",
      description: "Abra cadabra",
      supplier: "NXG suppliers",
      note: "Text note"
    }, {
      id: 2,
      name: "Inv 2",
      category: "This cat",
      description: "Abra cadabra",
      supplier: "NXG suppliers",
      note: "Text note"
    }, {
      id: 3,
      name: "Inv 3",
      category: "This cat",
      description: "Abra cadabra",
      supplier: "NXG suppliers",
      note: "Text note"
    }
  ]

  ngOnInit(): void {
  }

  openAddItemDialog(): void{
    this.newItem = new Inventory();
    const dialogRef = this.dialog.open(AddItemDialogBoxComponent, {
      width: '250px',
      data: this.newItem
    });

    dialogRef.afterClosed().subscribe(result => {
      // const timecard = {
      //   id: 4, 
      //   project: this.newTimecard.project, 
      //   dateIn: this.datePipe.transform(new Date(), 'mediumDate'),
      //   timeIn: this.datePipe.transform(new Date(), 'mediumTime'), 
      //   timeOut: null,
      //   comment: this.newTimecard.comment
      // }
      this.inventory = [...this.inventory, this.newItem];
    });
  }

}
