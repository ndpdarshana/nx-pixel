import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMaintenanceComponent } from './project-maintenance.component';

describe('ProjectMaintenanceComponent', () => {
  let component: ProjectMaintenanceComponent;
  let fixture: ComponentFixture<ProjectMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
