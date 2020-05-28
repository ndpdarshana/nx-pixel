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
  users: User[] = [
    {id: 1, name: 'Hydrogen', email:'hydrogen@pixels.com', password:""},
    {id: 2, name: 'Helium', email:'helium@pixels.com', password:""},
    {id: 3, name: 'Lithium', email:'lithium@pixels.com', password:""},
  ];

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
      this.users = [...this.users, this.newUser];
    });
  }
}
