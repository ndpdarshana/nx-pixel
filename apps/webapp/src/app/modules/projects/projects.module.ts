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



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectMgmtComponent,
    ProjectsTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    RouterModule,
    FlexLayoutModule
  ], 
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
