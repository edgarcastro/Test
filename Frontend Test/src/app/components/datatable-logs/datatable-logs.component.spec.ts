import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableLogsComponent } from './datatable-logs.component';

describe('DatatableLogsComponent', () => {
  let component: DatatableLogsComponent;
  let fixture: ComponentFixture<DatatableLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
