import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesAbsencesComponent } from './leaves-absences.component';

describe('LeavesAbsencesComponent', () => {
  let component: LeavesAbsencesComponent;
  let fixture: ComponentFixture<LeavesAbsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesAbsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
