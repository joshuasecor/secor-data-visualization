import { Component, OnInit } from '@angular/core';
import { Report } from '../../assets/mockReportOriginal';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
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
  
  id = 'reportsChart';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;
  title = "Streams";

  constructor() { }

  ngOnInit() {
    this.getAccountStats();
    this.dataSource = this.getDataSource();
  }

  getDataSource() {
    return {
      "chart": {
          "caption": "Worldwide Streams",
          "subCaption": "YTD Streams by Account",
          "numberprefix": "",
          "theme": ""
      },
      "data": this.accounts
    }
  }

  getAccountStats() {
    this.report.forEach(el => {
      if (el.Account == 'Apple') {
        this.accounts[0].value = (this.accounts[0].value + el.Streams);
      } else if (el.Account == 'Deezer') {
        this.accounts[1].value = (this.accounts[1].value + el.Streams);
      } else if (el.Account == 'Spotify') {
        this.accounts[2].value = (this.accounts[2].value + el.Streams);
      }
    });
  }

}
