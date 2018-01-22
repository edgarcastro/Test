import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {DataTableModule} from 'primeng/datatable';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {TabMenuModule} from 'primeng/tabmenu';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ChartModule} from 'primeng/chart';
import { AppComponent } from './app.component';
import { DatatableLogsComponent } from './components/datatable-logs/datatable-logs.component';
import { ChartResponseComponent } from './components/chart-response/chart-response.component';
import { ChartResponseDayComponent } from './components/chart-response-day/chart-response-day.component';
import { ChartRequestMachineComponent } from './components/chart-request-machine/chart-request-machine.component';
import { ChartRequestComplianceComponent } from './components/chart-request-compliance/chart-request-compliance.component';


@NgModule({
  declarations: [
    AppComponent,
    DatatableLogsComponent,
    ChartResponseComponent,
    ChartResponseDayComponent,
    ChartRequestMachineComponent,
    ChartRequestComplianceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    DataTableModule,
    TabMenuModule, 
    ProgressBarModule,
    DropdownModule, 
    CalendarModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
