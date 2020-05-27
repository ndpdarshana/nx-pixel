import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HrComponent } from '../../modules/hr/hr.component';
import { EmployeesComponent } from './employees/employees.component';
import { TimecardsComponent } from './employees/timecards/timecards.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './administration/users/users.component';
import { MaintenanceComponent } from './administration/users/maintenance/maintenance.component';
import { UserTableComponent } from './administration/users/user-table/user-table.component';

@NgModule({
  declarations: [
    HrComponent,
    EmployeesComponent,
    TimecardsComponent,
    AdministrationComponent,
    UsersComponent,
    MaintenanceComponent,
    UserTableComponent
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
  ],
  exports:[
    HrComponent
  ]
})
export class HrModule { }
