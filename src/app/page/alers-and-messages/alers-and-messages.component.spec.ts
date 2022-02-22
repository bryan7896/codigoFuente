import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlersAndMessagesComponent } from './alers-and-messages.component';

describe('AlersAndMessagesComponent', () => {
  let component: AlersAndMessagesComponent;
  let fixture: ComponentFixture<AlersAndMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlersAndMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlersAndMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
