import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { AddUserDialogBoxComponent } from './add-user-dialog-box/add-user-dialog-box.component'

@Component({
  selector: 'pixels-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogBoxComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
