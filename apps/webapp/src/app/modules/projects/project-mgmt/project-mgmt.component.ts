import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'pixels-project-mgmt',
  templateUrl: './project-mgmt.component.html',
  styleUrls: ['./project-mgmt.component.scss']
})
export class ProjectMgmtComponent implements OnInit {
  projects: Project[];

  constructor() { 
    this.projects = [{
      id: 1,
      name: 'Homebruke Housing',
      client: 'Lola Group ltd',
      startDate: '01/01/2020',
      endDate: '25/02/2021',
      compilation: 60
    }, {
      id: 2,
      name: 'Wollongong Tele Market',
      client: 'Wollongong city council',
      startDate: '04/05/2020',
      endDate: '20/08/2021',
      compilation: 45
    }, {
      id: 3,
      name: 'Corrimal Hospital ICU',
      client: 'Private Hospitals Group',
      startDate: '09/03/2020',
      endDate: '09/09/2020',
      compilation: 60
    }]
  }

  ngOnInit(): void {
  }

}
