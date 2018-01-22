import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartResponseComponent } from './chart-response.component';

describe('ChartResponseComponent', () => {
  let component: ChartResponseComponent;
  let fixture: ComponentFixture<ChartResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
