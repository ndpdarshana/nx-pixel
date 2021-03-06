import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../../models/project.model';

import { ChartType, Column } from 'angular-google-charts';

interface Chart {
  title: string;
  type: ChartType;
  data: any[][];
  columns?: Column[];
  options?: {};
}

@Component({
  selector: 'pixels-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  projectId;
  project: Project;
  gunttChart: Chart;
  lineChart: Chart;
  createdVsCompletedChart: Chart;
  taskSummaryPie: Chart;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.project = {
      id: 1,
      name: 'Homebruke Housing',
      client: 'Lola Group ltd',
      startDate: '01/01/2020',
      endDate: '25/02/2021',
      compilation: 80
    }

    /**
     * Guntt Chart initializer
     */
    this.gunttChart = {
      title: "Guntt Chart",
      type: ChartType.Gantt,
      columns: [
        {label: 'Task ID', type: 'string'},
        {label: 'Task Name', type: 'string'},
        {label: 'Start Date', type: 'date'},
        {label: 'End Date', type: 'date'},
        {label: 'Duration', type: 'number'},
        {label: 'Percent Complete', type: 'number'},
        {label: 'Dependencies', type: 'string'},
      ],
      data: [
        ['GroundWork', 'Ground Work',
         new Date(2019, 1, 1), new Date(2019, 2, 25), null,  100,  null],
        ['Foundation', 'Foundation',
         null, new Date(2019, 3, 4), this.daysToMilliseconds(10), 100, 'GroundWork'],
        ['Walls', 'Fixing Walls',
         null, new Date(2019, 5, 3), this.daysToMilliseconds(60), 100, 'Foundation'],
        ['Roof', 'Roof setup',
         null, new Date(2019, 5, 20), this.daysToMilliseconds(20), 100, 'Foundation, Walls'],
        ['Cabling', 'Cableing',
         null, new Date(2019, 5, 25), this.daysToMilliseconds(10), 80, 'Walls, Roof'],
        ['Plumbing', 'Plumbing',
         null, new Date(2019, 5, 25), this.daysToMilliseconds(10), 60, 'Foundation,Walls'],
        ['Wallcover', 'Wall covering',
         null, new Date(2019, 6, 30), this.daysToMilliseconds(35), 75, 'Walls'],
        ['Finishing', 'Finishing work',
         null, new Date(2019, 7, 30), this.daysToMilliseconds(20), 80, 'Walls, Roof']

      ],
      options: {
        height: 400,
        width: 1080,
        gantt: {
          criticalPathEnabled: true,
          criticalPathStyle: {
            stroke: '#e64a19',
            strokeWidth: 5
          }
        }
      }
    }

    /**
     * Line Chart
     */
    this.lineChart = {
      title: 'Project economy',
      type: ChartType.Line,
      columns: [
        {type: 'number', label: 'Month'},
        {type: 'number', label: 'Income'},
        {type: 'number', label: 'Expense'}
      ],
      data: [
        [1, 5000, 8000],
        [2, 2000, 3520],
        [3, 10000, 15000],
        [4, 8000, 6521],
        [5, 10000, 8852],
        [6, 7500, 6852]
      ],
      options: {
        width: 350,
        height: 150
      }
    }

    /**
     * Created Vs Completed Chart
     */
    this.createdVsCompletedChart = {
      title: 'Created vs Completed Tasks',
      type: ChartType.Line,
      columns: [
        {type: 'number', label: 'Month'},
        {type: 'number', label: 'Created'},
        {type: 'number', label: 'Completed'}
      ],
      data: [
        [1, 4, 4],
        [2, 9, 8],
        [3, 16, 13],
        [4, 25, 25],
        [5, 39, 34],
        [6, 52, 48]
      ],
      options: {
        width: 700,
        height: 300
      }
    }

    /**
     * Task summary Chart
     */
    this.taskSummaryPie = {
      title: 'Task Summary',
      type: ChartType.PieChart,
      columns: [
        {type: 'string', label: 'Task'},
        {type: 'number', label: 'Hours'}
      ],
      data: [
        ['On Schedule',     60],
        ['Completed',      30],
        ['Over due',  10],
      ],
      options: {
        width: 700,
        height: 300
      }
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.projectId = param.get('id');
    })
  }

  daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }

}
