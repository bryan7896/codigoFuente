import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-week-payment-forecast-graphic',
  templateUrl: './week-payment-forecast-graphic.component.html',
  styleUrls: ['./week-payment-forecast-graphic.component.css']
})
export class WeekPaymentForecastGraphicComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  stacked = false;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        stacked: this.stacked,
      },
      y: {
        min: 10,
        stacked: this.stacked,
      }
    },
    plugins: {
      legend: {
        display: true,
      },

    }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ 'Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5', 'Wk6', 'Wk7' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Sold',backgroundColor:'#6C4EFA' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Approved',backgroundColor:'#60C3AD' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Deferred',backgroundColor:'#2F71B2' },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }
  changeType(){
    this.stacked = !this.stacked;

  }

}
