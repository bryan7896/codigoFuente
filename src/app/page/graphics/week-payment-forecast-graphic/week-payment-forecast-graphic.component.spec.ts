import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPaymentForecastGraphicComponent } from './week-payment-forecast-graphic.component';

describe('WeekPaymentForecastGraphicComponent', () => {
  let component: WeekPaymentForecastGraphicComponent;
  let fixture: ComponentFixture<WeekPaymentForecastGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekPaymentForecastGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPaymentForecastGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
