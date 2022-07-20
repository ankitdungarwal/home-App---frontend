import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyNewComponent } from './dairy-new.component';

describe('DairyNewComponent', () => {
  let component: DairyNewComponent;
  let fixture: ComponentFixture<DairyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
