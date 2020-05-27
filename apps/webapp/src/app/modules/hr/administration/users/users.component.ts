import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { AddUserDialogBoxComponent } from './add-user-dialog-box/add-user-dialog-box.component'
import { User } from './user.model';

@Component({
  selector: 'pixels-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  newUser:User = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddUserDialog(): void {
    this.newUser = new User()
    const dialogRef = this.dialog.open(AddUserDialogBoxComponent, {
      width: '250px',
      data: this.newUser
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
