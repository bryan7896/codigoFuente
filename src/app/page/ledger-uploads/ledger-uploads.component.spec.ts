import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerUploadsComponent } from './ledger-uploads.component';

describe('LedgerUploadsComponent', () => {
  let component: LedgerUploadsComponent;
  let fixture: ComponentFixture<LedgerUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerUploadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
