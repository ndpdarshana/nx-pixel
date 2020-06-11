import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceConsolComponent } from './balance-consol.component';

describe('BalanceConsolComponent', () => {
  let component: BalanceConsolComponent;
  let fixture: ComponentFixture<BalanceConsolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceConsolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceConsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
