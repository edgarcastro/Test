import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartResponseDayComponent } from './chart-response-day.component';

describe('ChartResponseDayComponent', () => {
  let component: ChartResponseDayComponent;
  let fixture: ComponentFixture<ChartResponseDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartResponseDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartResponseDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
