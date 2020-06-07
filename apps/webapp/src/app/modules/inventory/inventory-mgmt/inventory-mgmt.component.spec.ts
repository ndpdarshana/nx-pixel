import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMgmtComponent } from './inventory-mgmt.component';

describe('InventoryMgmtComponent', () => {
  let component: InventoryMgmtComponent;
  let fixture: ComponentFixture<InventoryMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
