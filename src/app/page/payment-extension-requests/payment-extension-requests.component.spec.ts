import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentExtensionRequestsComponent } from './payment-extension-requests.component';

describe('PaymentExtensionRequestsComponent', () => {
  let component: PaymentExtensionRequestsComponent;
  let fixture: ComponentFixture<PaymentExtensionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentExtensionRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentExtensionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
