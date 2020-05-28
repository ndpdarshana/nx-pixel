import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { HrModule } from '../../modules/hr/hr.module';
import { FinanceModule } from '../../modules/finance/finance.module';
import { InventoryModule } from '../../modules/inventory/inventory.module';
import { ProjectModule } from '../../modules/project/project.module';

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
    HrModule,
    FinanceModule,
    InventoryModule,
    ProjectModule
  ]
})
export class DefaultModule { }
