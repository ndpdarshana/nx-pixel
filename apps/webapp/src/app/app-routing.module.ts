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
import { ProjectsComponent } from './modules/projects/projects.component';
import { LeavesAbsencesComponent } from './modules/hr/employees/leaves-absences/leaves-absences.component';
import { PaymentsComponent } from './modules/hr/employees/payments/payments.component';
import { InventoryMgmtComponent } from './modules/inventory/inventory-mgmt/inventory-mgmt.component';
import { InvoicesComponent } from './modules/finance/invoices/invoices.component';
import { AccountInfoComponent } from './modules/finance/account-info/account-info.component';
import { BalanceConsolComponent } from './modules/finance/balance-consol/balance-consol.component';
import { PurchaseOrdersComponent } from './modules/finance/purchase-orders/purchase-orders.component';
import { ProjectMgmtComponent } from './modules/projects/project-mgmt/project-mgmt.component';

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
    component: InventoryComponent,
    children: [{
      path: 'inventoryMgmt',
      component: InventoryMgmtComponent
    }, {
      path: 'maintenance',
      component: MaintenanceComponent
    }]
  }, {
    path: 'finance',
    component: FinanceComponent,
    children: [{
      path: 'invoices',
      component: InvoicesComponent
    }, {
      path: 'accountInfo',
      component: AccountInfoComponent
    }, {
      path: 'balanceConsol',
      component: BalanceConsolComponent
    }, {
      path: 'purchaseOrders',
      component: PurchaseOrdersComponent
    }]
  }, {
    path: 'projects',
    component: ProjectsComponent,
    children: [{
      path: 'projectMgmt',
      component: ProjectMgmtComponent
    }]
  }]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
