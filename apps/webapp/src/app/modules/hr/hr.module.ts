import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HrComponent } from '../../modules/hr/hr.component';
import { EmployeesComponent } from './employees/employees.component';
import { TimecardsComponent } from './employees/timecards/timecards.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './administration/users/users.component';
import { MaintenanceComponent } from './administration/users/maintenance/maintenance.component';
import { UserTableComponent } from './administration/users/user-table/user-table.component';
import { AddUserDialogBoxComponent } from './administration/users/add-user-dialog-box/add-user-dialog-box.component';
import { TimecardTableComponent } from './employees/timecards/timecard-table/timecard-table.component';
import { AddTimecardDialogBoxComponent } from './employees/timecards/add-timecard-dialog-box/add-timecard-dialog-box.component';

@NgModule({
  declarations: [
    HrComponent,
    EmployeesComponent,
    TimecardsComponent,
    AdministrationComponent,
    UsersComponent,
    MaintenanceComponent,
    UserTableComponent,
    AddUserDialogBoxComponent,
    TimecardTableComponent,
    AddTimecardDialogBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    FlexLayoutModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    HrComponent
  ]
})
export class HrModule { }
