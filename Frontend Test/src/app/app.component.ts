import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {label: 'Transaction Logs', icon: 'fa-table', routerLink: ['/']},
    {label: 'Total Average Response Time', icon: 'fa-bar-chart', routerLink: ['/responseTime']},
    {label: 'Average Response Time per Day', icon: 'fa-line-chart', routerLink: ['/responseTimeByDay']},
    {label: 'Total Requests per Machine', icon: 'fa-bar-chart', routerLink: ['/requestMachine']},
    {label: 'Total Requests per Compliance Status', icon: 'fa-bar-chart', routerLink: ['/requestCompliance']}
  ];
}
