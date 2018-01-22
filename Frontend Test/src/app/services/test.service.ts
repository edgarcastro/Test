import { Log } from '../models/log.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  getLogs(startDate: Date, endDate: Date, stateCode?: string): Observable<Log[]> {
    let url = `https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData`;
    url += `?startdate=${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`;
    url += `&enddate=${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
    if(stateCode) url += `&state=${stateCode}`; 
    return this.http.get<Log[]>(url);
  }

}
