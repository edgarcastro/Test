import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRequestMachineComponent } from './chart-request-machine.component';

describe('ChartRequestMachineComponent', () => {
  let component: ChartRequestMachineComponent;
  let fixture: ComponentFixture<ChartRequestMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRequestMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRequestMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
