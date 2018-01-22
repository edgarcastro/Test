import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatableLogsComponent } from './components/datatable-logs/datatable-logs.component';
import { ChartResponseComponent } from './components/chart-response/chart-response.component';
import { ChartResponseDayComponent } from './components/chart-response-day/chart-response-day.component';
import { ChartRequestMachineComponent } from './components/chart-request-machine/chart-request-machine.component';
import { ChartRequestComplianceComponent } from './components/chart-request-compliance/chart-request-compliance.component';

const routes: Routes = [
  { path: '', component: DatatableLogsComponent },
  { path: 'responseTime', component: ChartResponseComponent },
  { path: 'responseTimeByDay', component: ChartResponseDayComponent },
  { path: 'requestMachine', component: ChartRequestMachineComponent },
  { path: 'requestCompliance', component: ChartRequestComplianceComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
