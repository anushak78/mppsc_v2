import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewMasterComponent } from './interview-master.component';

describe('InterviewMasterComponent', () => {
  let component: InterviewMasterComponent;
  let fixture: ComponentFixture<InterviewMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
