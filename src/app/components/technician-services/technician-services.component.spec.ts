import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianServicesComponent } from './technician-services.component';

describe('TechnicianServicesComponent', () => {
  let component: TechnicianServicesComponent;
  let fixture: ComponentFixture<TechnicianServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
