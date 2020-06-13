import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../../models/project.model';

@Component({
  selector: 'pixels-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {
  projectId;
  project: Project;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.project = {
      id: 1,
      name: 'Homebruke Housing',
      client: 'Lola Group ltd',
      startDate: '01/01/2020',
      endDate: '25/02/2021',
      compilation: 60
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.projectId = param.get('id');
    })
  }

}
