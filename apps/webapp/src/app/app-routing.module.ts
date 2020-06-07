import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HrComponent } from './modules/hr/hr.component';
import { UsersComponent } from './modules/hr/administration/users/users.component';
import { MaintenanceComponent } from './modules/hr/administration/users/maintenance/maintenance.component';
import { TimecardsComponent } from './modules/hr/employees/timecards/timecards.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { FinanceComponent } from './modules/finance/finance.component';
import { ProjectComponent } from './modules/project/project.component';
import { LeavesAbsencesComponent } from './modules/hr/employees/leaves-absences/leaves-absences.component';
import { PaymentsComponent } from './modules/hr/employees/payments/payments.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'hr',
    component: HrComponent,
    children: [{
      path: 'admin/users',
      component: UsersComponent
    }, {
      path: 'admin/maintenance',
      component: MaintenanceComponent
    }, {
      path: 'employee/timecard',
      component: TimecardsComponent
    }, {
      path: 'employee/leaves',
      component: LeavesAbsencesComponent
    }, {
      path: 'employee/payments',
      component: PaymentsComponent
    }]
  }, {
    path: 'inventory',
    component: InventoryComponent
  }, {
    path: 'finance',
    component: FinanceComponent
  }, {
    path: 'project',
    component: ProjectComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
