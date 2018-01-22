import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Log } from '../../models/log.model';

export class dataChart{
  labels: string[];
  datasets: [{
      label: string,
      backgroundColor: string,
      borderColor: string,
      data: number[]
  }];
}

@Component({
  selector: 'app-chart-response',
  templateUrl: './chart-response.component.html',
  styleUrls: ['./chart-response.component.css'],
  providers: [TestService]
})
export class ChartResponseComponent implements OnInit {
  data: dataChart;
  logs: Log[] = [];
  startDate: Date;
  endDate: Date;
  stateCode: string = 'FL';
  stateCodes: any[];
  loading: boolean;
  average: number;
  date: Date[];

  constructor(private testService: TestService) {
    this.startDate = new Date();
    this.endDate = new Date();
    this.data = new dataChart();
    this.date = [];
    this.date.push(this.startDate);
    this.date.push(this.endDate);
    this.stateCodes = [
      {label: 'ALL', value:''},
      {label:'FL', value:'FL'},
      {label:'OH', value:'OH'},
      {label:'GA', value:'GA'},
      {label:'LA', value:'LA'}
  ];
   }

  ngOnInit() {
    this.getLogs()
  }

  getLogs() {
    this.loading = true;
    let obs;
    if(this.stateCode == '') obs = this.testService.getLogs(this.startDate, this.endDate)
    else obs = this.testService.getLogs(this.startDate, this.endDate, this.stateCode)
    obs.subscribe(response => {
        this.logs = <Log[]>response ;
       this.data = this.groupLogsAverageResponse(this.logs);
    }, error => {
        console.log(error);
    },() => {
      this.loading = false
  });
  }

  groupLogsAverageResponse(logs: Log[]): dataChart{
      let accumulator = 0;
      let dataGrouped = new dataChart();
      let a;
      let b;
      let seconds = 0;
      dataGrouped.labels = [];
      dataGrouped.datasets = [
        {
            label: 'Total Average Response Time (Seconds)',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: []
        }];
      
      logs.forEach(log=>{
        a = new Date(log.dt_Start_Log);
        b = new Date(log.dt_end_log);
        seconds = (b.getTime()-a.getTime())/1000;
        accumulator += seconds;
      });
      this.average = Math.abs(accumulator / logs.length);
      dataGrouped.labels.push('Total Average (Seconds)');
      dataGrouped.datasets[0].data.push(this.average);
      return dataGrouped;
  }
  

}
