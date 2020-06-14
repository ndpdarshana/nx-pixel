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
import { GoogleChartsModule } from 'angular-google-charts';

import { ProjectDashboardComponent } from './project-mgmt/project-dashboard/project-dashboard.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectMgmtComponent,
    ProjectsTableComponent,
    ProjectDashboardComponent
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
    RouterModule,
    FlexLayoutModule,
    GoogleChartsModule
  ], 
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
