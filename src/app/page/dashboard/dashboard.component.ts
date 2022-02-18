import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {data} from "../../const/const";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },
    indexAxis: 'y',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "TODAY'S ACTOVOTY ANALYSIS"
      },
    },
    responsive: true,

  };

  public barChartLabels: string[] = [ '' ];
  public barChartType: ChartType = 'bar';
 public datasets= [
    { data: [ Number(38755.85)  ], label: 'Unapproved', backgroundColor: '#D0021B'},
    { data: [ Number(49241059.71) ], label: 'Approved',backgroundColor: '#60C3AD' },
    { data: [ Number(9928810.70 ) ], label: 'Sale Pending',backgroundColor: '#FF8100' },
    { data: [ Number(83629099.52)  ], label: 'Sold',backgroundColor: '#6C4EFA' },
  ]

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [ Number(38755.85)  ], label: 'Unapproved', backgroundColor: '#D0021B'},
      { data: [ Number(49241059.71) ], label: 'Approved',backgroundColor: '#60C3AD' },
      { data: [ Number(9928810.70 ) ], label: 'Sale Pending',backgroundColor: '#FF8100' },
      { data: [ Number(83629099.52)  ], label: 'Sold',backgroundColor: '#6C4EFA' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
