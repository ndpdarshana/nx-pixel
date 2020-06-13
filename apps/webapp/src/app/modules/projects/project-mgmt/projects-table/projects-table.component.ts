import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Project } from '../../../../models/project.model';

@Component({
  selector: 'pixels-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit, AfterViewInit
 {
  selection = new SelectionModel<Project>(true, []);
  @ViewChild(MatTable) table: MatTable<Project>;

  dataSource: MatTableDataSource<Project>;

  displayedColumns = ['id', 'name', 'client', 'compilation', 'startDate', 'endDate', 'actions']

  @Input() projects: Project[];

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.projects);
  }

  ngAfterViewInit(){
    this.table.dataSource = this.dataSource;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Project): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
