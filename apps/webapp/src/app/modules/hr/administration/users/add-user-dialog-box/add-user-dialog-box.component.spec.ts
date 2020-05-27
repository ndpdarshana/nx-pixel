import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDialogBoxComponent } from './add-user-dialog-box.component';

describe('AddUserDialogBoxComponent', () => {
  let component: AddUserDialogBoxComponent;
  let fixture: ComponentFixture<AddUserDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
