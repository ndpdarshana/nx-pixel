import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectMgmtComponent } from './project-mgmt/project-mgmt.component';
import { ProjectsTableComponent } from './project-mgmt/projects-table/projects-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion'
import { GoogleChartsModule } from 'angular-google-charts';

import { ProjectDashboardComponent } from './project-mgmt/project-dashboard/project-dashboard.component';
import { ProjectMaintenanceComponent } from './project-mgmt/project-maintenance/project-maintenance.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectMgmtComponent,
    ProjectsTableComponent,
    ProjectDashboardComponent,
    ProjectMaintenanceComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    FlexLayoutModule,
    GoogleChartsModule
  ], 
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
