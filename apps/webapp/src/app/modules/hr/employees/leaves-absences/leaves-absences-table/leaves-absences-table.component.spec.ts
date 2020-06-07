import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesAbsencesTableComponent } from './leaves-absences-table.component';

describe('LeavesAbsencesTableComponent', () => {
  let component: LeavesAbsencesTableComponent;
  let fixture: ComponentFixture<LeavesAbsencesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesAbsencesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesAbsencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
