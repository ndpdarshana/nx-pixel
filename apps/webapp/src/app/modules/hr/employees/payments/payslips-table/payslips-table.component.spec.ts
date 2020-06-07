import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipsTableComponent } from './payslips-table.component';

describe('PayslipsTableComponent', () => {
  let component: PayslipsTableComponent;
  let fixture: ComponentFixture<PayslipsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayslipsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayslipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
