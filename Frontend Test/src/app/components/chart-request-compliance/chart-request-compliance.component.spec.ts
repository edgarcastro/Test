import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRequestComplianceComponent } from './chart-request-compliance.component';

describe('ChartRequestComplianceComponent', () => {
  let component: ChartRequestComplianceComponent;
  let fixture: ComponentFixture<ChartRequestComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRequestComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRequestComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
