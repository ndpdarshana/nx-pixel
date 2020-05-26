import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { HrModule } from '../../modules/hr/hr.module';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    RouterModule,
    HrModule
  ]
})
export class DefaultModule { }
