import { Component, OnInit } from '@angular/core';
import { Report } from '../../assets/mockReportOriginal';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {
  report:any = Report;
  accounts = [
    {
      label: 'Apple',
      value: 0
    },
    {
      label: 'Deezer',
      value: 0
    },
    {
      label: 'Spotify',
      value: 0
    }
  ];

  id = 'revenueChart';
  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;
  title = "Revenue";

  constructor() {
  }

  ngOnInit() {
    this.getAccountStats();
    this.dataSource = this.getDataSource();
  }

  getDataSource() {
    return {
      "chart": {
          "caption": "Worldwide Revenue",
          "subCaption": "YTD Revenue by Account",
          "numberprefix": "€",
          "theme": "fint"
      },
      "data": this.accounts
    }
  }

  getAccountStats() {
    this.report.forEach(el => {
      if (el.Account == 'Apple') {
        this.accounts[0].value = (this.accounts[0].value + el.Revenue);
      } else if (el.Account == 'Deezer') {
        this.accounts[1].value = (this.accounts[1].value + el.Revenue);
      } else if (el.Account == 'Spotify') {
        this.accounts[2].value = (this.accounts[2].value + el.Revenue);
      }
    });
  }

}
