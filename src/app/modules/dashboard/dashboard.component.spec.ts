import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dashboardComponent } from './dashboard.component';

describe('SignupComponent', () => {
  let component: dashboardComponent;
  let fixture: ComponentFixture<dashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
