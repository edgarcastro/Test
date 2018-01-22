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
  selector: 'app-chart-request-compliance',
  templateUrl: './chart-request-compliance.component.html',
  styleUrls: ['./chart-request-compliance.component.css'],
  providers: [TestService]
})
export class ChartRequestComplianceComponent implements OnInit {
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
        this.data = this.groupLogsByCompliance(this.logs);
    }, error => {
        console.log(error);
    },() => {
      this.loading = false
  });
  }

  groupLogsByCompliance(logs: Log[]): dataChart{
      let labels = [];
      let dataGrouped = new dataChart();
      dataGrouped.labels = [];
      dataGrouped.datasets = [
        {
            label: 'Total Requests per Compliance Status',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: []
        }];
      logs.sort((a, b)=>{
          if(a.ds_compl_status_returned > b.ds_compl_status_returned) return 1;
          if(a.ds_compl_status_returned < b.ds_compl_status_returned) return -1;
          if(a.ds_compl_status_returned == b.ds_compl_status_returned) return 0;
      }).forEach(x=>{
        labels.push(x.ds_compl_status_returned);
      });
      let label = '';
      let count = 0;
      labels.forEach(l=>{
        if(l != label){
            if(label != ''){
                dataGrouped.labels.push(label);
                dataGrouped.datasets[0].data.push(count);
            }
            label = l;
            count = 1;
        }else{
            count++;
        }
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
