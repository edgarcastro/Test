import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Log } from '../../models/log.model';


@Component({
  selector: 'datatable-logs',
  templateUrl: './datatable-logs.component.html',
  styleUrls: ['./datatable-logs.component.css'],
  providers: [TestService]
})
export class DatatableLogsComponent implements OnInit {
  logs: Log[] = [];
  startDate: Date;
  endDate: Date;
  stateCode: string;
  stateCodes: any[];
  loading: boolean;
  date: Date[];

  constructor(private testService: TestService) { 
    this.startDate = new Date();
    this.endDate = new Date();
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
    this.stateCode = 'FL'
    this.getLogs();
  }

  getLogs() {
    this.loading = true;
    let obs;
    if(this.stateCode == '') obs = this.testService.getLogs(this.startDate, this.endDate)
    else obs = this.testService.getLogs(this.startDate, this.endDate, this.stateCode)
    obs.subscribe(response => {
        this.logs = <Log[]>response ;
        this.logs = this.logs.sort((a, b)=>{
          if(a.dt_Start_Log > b.dt_Start_Log) return 1;
          if(a.dt_Start_Log < b.dt_Start_Log) return -1;
          if(a.dt_Start_Log == b.dt_Start_Log) return 0;
      });
    }, error => {
        console.log(error);
    },() => {
      this.loading = false
  });
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
