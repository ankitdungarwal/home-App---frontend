import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyMonthlyTrackerComponent } from './dairy-monthly-tracker.component';

describe('DairyMonthlyTrackerComponent', () => {
  let component: DairyMonthlyTrackerComponent;
  let fixture: ComponentFixture<DairyMonthlyTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyMonthlyTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyMonthlyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
