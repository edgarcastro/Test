import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Log } from '../../models/log.model';

export class dataChart{
    labels: string[];
    datasets: [{
        label: string,
        fill: boolean,
        borderColor: string,
        data: number[]
    }];
}

@Component({
  selector: 'app-chart-response-day',
  templateUrl: './chart-response-day.component.html',
  styleUrls: ['./chart-response-day.component.css'],
  providers: [TestService]
})
export class ChartResponseDayComponent implements OnInit {
  data: dataChart;
  logs: Log[] = [];
  startDate: Date;
  endDate: Date;
  stateCode: string = 'FL';
  stateCodes: any[];
  loading: boolean;
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
        this.data = this.groupLogsAverageByDay(this.logs);
    }, error => {
        console.log(error);
    },() => {
      this.loading = false
  });
  }

  groupLogsAverageByDay(logs: Log[]): dataChart{
      let labels = [];
      let accumulator = 0;
      let counter = 0;
      let dataGrouped = new dataChart();
      let a = new Date(Number.MIN_VALUE);
      let b = new Date();
      let dt = new Date();
      let seconds = 0;
      dataGrouped.labels = [];
      dataGrouped.datasets = [
        {
            label: 'Average Response Time per Day (Seconds)',
            fill: false,
            borderColor: '#1E88E5',
            data: []
        }];
      logs.map(log=>{
        return {
          dt_Start_Log: log.dt_Start_Log,
          dt_end_log: log.dt_end_log
        }
      }).sort((a, b)=>{
          if(a.dt_Start_Log > b.dt_Start_Log) return 1;
          if(a.dt_Start_Log < b.dt_Start_Log) return -1;
          if(a.dt_Start_Log == b.dt_Start_Log) return 0;
      })
    .forEach((log, index, array)=>{
      //Compare if day, month and year are differents 
      dt = new Date(log.dt_Start_Log);
      if(dt.getDate() == a.getDate() && dt.getMonth() == a.getMonth() && dt.getFullYear() == a.getFullYear()) {
        //a = dt;
        b = new Date(log.dt_end_log);
        seconds = (b.getTime()-dt.getTime())/1000;
        accumulator += seconds;
        counter++;
      }
      else if(dt.getDate() > a.getDate() || dt.getMonth() > a.getMonth() || dt.getFullYear() > a.getFullYear()) {
        //a = dt;
        if(a != new Date(Number.MIN_VALUE) && index != (array.length-1)){
          labels.push(`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`);
          dataGrouped.datasets[0].data.push(Math.abs(accumulator/counter));
        }

        b = new Date(log.dt_end_log);
        seconds = (b.getTime()-dt.getTime())/1000;
        accumulator = seconds;
        counter = 1;
      }

      if(index == (array.length-1)) {
        labels.push(`${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`);
        dataGrouped.datasets[0].data.push(Math.abs(accumulator/counter));
      }
      a = dt;
      dataGrouped.labels = labels.filter((label, index)=>{
        if(index > 0) return label;
      });

      dataGrouped.datasets[0].data = dataGrouped.datasets[0].data.filter((data, index)=>{
        if(data != NaN) return data;
      });
    });
      return dataGrouped;
  }

  updateRangeDate(event: any) {
    if(event[0] != null && event[1] != null) {
      this.date = event;
      this.startDate = this.date[0];
      this.endDate = this.date[1];
      this.getLogs();
    }
  }

}
