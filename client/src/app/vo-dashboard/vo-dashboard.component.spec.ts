import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoDashboardComponent } from './vo-dashboard.component';

describe('VoDashboardComponent', () => {
  let component: VoDashboardComponent;
  let fixture: ComponentFixture<VoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
