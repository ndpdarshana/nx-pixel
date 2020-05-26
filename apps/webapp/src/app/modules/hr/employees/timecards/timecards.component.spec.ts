import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardsComponent } from './timecards.component';

describe('TimecardsComponent', () => {
  let component: TimecardsComponent;
  let fixture: ComponentFixture<TimecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
