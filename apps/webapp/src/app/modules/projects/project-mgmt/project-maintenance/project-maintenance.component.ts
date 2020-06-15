import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../models/project.model';

@Component({
  selector: 'pixels-project-maintenance',
  templateUrl: './project-maintenance.component.html',
  styleUrls: ['./project-maintenance.component.scss']
})
export class ProjectMaintenanceComponent implements OnInit {
  project: Project;
  panelOpenState = false;
  
  constructor() { 
    this.project = {
      id: 1,
      name: 'Homebruke Housing',
      client: 'Lola Group ltd',
      startDate: '01/01/2020',
      endDate: '25/02/2021',
      compilation: 80
    }
  }

  ngOnInit(): void {
  }

}
