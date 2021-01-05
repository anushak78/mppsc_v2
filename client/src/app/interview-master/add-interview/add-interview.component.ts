import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { InterviewMasterService } from '../interview-master.service';
import { InterviewMaster } from '../model/interview-master.model';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent implements OnInit {
  InterviewMaster = new InterviewMaster();

  tabIndex = 0
  Officer = [{ name: 'Nseit' }];
  board = [{ name: 'A1' }];
  chairman = [{ name: 'A1' }]
  interview: FormGroup;
  addInterview: FormGroup;
  constructor(private InterviewMasterService: InterviewMasterService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.addInterview = this.fb.group({
      interview_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      notification_no: ['', [Validators.required]],
      status: ['yes', [Validators.required]],
    })

    this.interview = this.fb.group({
      Details: this.fb.group({
        interview_id: ['', [Validators.required]],
        interview_name: ['', [Validators.required]],
        notification: ['', [Validators.required]],
        status: ['yes', [Validators.required]],
      }),
      dates: this.fb.group({
        fromDate: ['', [Validators.required]],
        toDate: ['', [Validators.required]]
      }),
      marks: this.fb.group({
        unreserved_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        unreserved_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        EWS_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        EWS_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        OBC_NCL_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        OBC_NCL_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        SC_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        SC_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        ST_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        ST_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      }),
      verification: this.fb.group({
        verfication_officer: ['', [Validators.required]],
        interviewDatesOfficer: ['', [Validators.required]]
      }),
      board: this.fb.group({
        boardName: ['', [Validators.required]],
        interviewDatesBoard: ['', [Validators.required]]
      }),
      chairman: this.fb.group({
        boardChairman: ['', [Validators.required]],
        member: ['', [Validators.required]],
      }),
    })
  }

  onNext() {
    this.tabIndex += 1;
  }

  selectedIndex = 0;
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }

  public nextStep() {
    this.selectedIndex += 1;
  }

  public previousStep() {
    this.selectedIndex -= 1;
  }

  addDateForm() {
    return this.fb.group(
      {
        fromDate: ['', [Validators.required]],
        toDate: ['', [Validators.required]],
      })
  }

  async addDates() {
    // this.dates = this.interview.get('dates') as FormArray;
    // this.dates.push(this.addDateForm());
  }

  async deleteDates(i) {
    const arrayControl = <FormArray>this.interview.controls['dates'];
    arrayControl.removeAt(i);
  }

  async onSubmit() {
    let rel;
    console.log("value", this.addInterview.value);

    rel = await this.InterviewMasterService.addInterview(this.addInterview.value);
    if (!rel) {
      alert(this.InterviewMasterService.getErrorMessage);
    } else {
      this.router.navigate([`/interview-master`]);
    }
  }

}
