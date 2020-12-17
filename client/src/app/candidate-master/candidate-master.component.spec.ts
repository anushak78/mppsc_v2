import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMasterComponent } from './candidate-master.component';

describe('CandidateMasterComponent', () => {
  let component: CandidateMasterComponent;
  let fixture: ComponentFixture<CandidateMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
