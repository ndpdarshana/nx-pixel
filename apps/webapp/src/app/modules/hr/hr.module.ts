import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrComponent } from '../../modules/hr/hr.component';
import { EmployeesComponent } from './employees/employees.component';
import { TimecardsComponent } from './employees/timecards/timecards.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './administration/users/users.component';
import { MaintenanceComponent } from './administration/users/maintenance/maintenance.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HrComponent,
    EmployeesComponent,
    TimecardsComponent,
    AdministrationComponent,
    UsersComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[
    HrComponent
  ]
})
export class HrModule { }
