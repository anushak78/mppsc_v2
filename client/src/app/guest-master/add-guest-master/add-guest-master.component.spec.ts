import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuestMasterComponent } from './add-guest-master.component';

describe('AddGuestMasterComponent', () => {
  let component: AddGuestMasterComponent;
  let fixture: ComponentFixture<AddGuestMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuestMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuestMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
