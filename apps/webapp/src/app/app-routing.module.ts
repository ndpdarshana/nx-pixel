import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HrComponent } from './modules/hr/hr.component';
import { UsersComponent } from './modules/hr/administration/users/users.component';
import { MaintenanceComponent } from './modules/hr/administration/users/maintenance/maintenance.component';

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
    }]
  }]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
