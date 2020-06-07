import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMgmtTableComponent } from './inventory-mgmt-table.component';

describe('InventoryMgmtTableComponent', () => {
  let component: InventoryMgmtTableComponent;
  let fixture: ComponentFixture<InventoryMgmtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMgmtTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMgmtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
