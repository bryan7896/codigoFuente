import {Component, Input, OnInit} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-char-line-horizontal',
  templateUrl: './char-line-horizontal.component.html',
  styleUrls: ['./char-line-horizontal.component.css']
})
export class CharLineHorizontalComponent implements OnInit {
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

  @Input('dataset') datasets: any = [];


  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: this.datasets
  };
  constructor() { }

  ngOnInit(): void {
  }

}
