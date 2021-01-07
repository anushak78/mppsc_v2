import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { InterviewMasterService } from '../interview-master.service';
import { DatesRange } from '../model/dates-range.model';
import { InterviewMark } from '../model/interview-mark.model';
import { InterviewMaster } from '../model/interview-master.model';
import { MapVerficationOfficer } from '../model/map-verfication-officer.model';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent implements OnInit {
  interviewMaster = new InterviewMaster();
  dateRange = new DatesRange();
  interviewMark = new InterviewMark();
  MapVerficationOfficer = new MapVerficationOfficer();
  tabIndex = 0
  Officer = [{ name: 'Nseit' }];
  board = [{ name: 'A1' }];
  chairman = [{ name: 'A1' }]
  interview: FormGroup;
  interviewMarks: FormGroup;
  dateList: DatesRange[] = [];
  activity = 'add'
  date = [{ fromDate: '2019', toDate: '2021' }, { fromDate: '2020', toDate: '2021' }]
  officer: MapVerficationOfficer[] = [];
  gender
  arr
  constructor(private InterviewMasterService: InterviewMasterService,
    private router: Router,
    private fb: FormBuilder) { }

  addInterview = new FormGroup({
    interview_id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    notification_no: new FormControl('', [Validators.required]),
    status: new FormControl('yes', [Validators.required]),
  })

  valueChangeVerification(unit, $event) {
    if ($event.checked) {
      this.officer.push(unit);
      console.log("officer", this.officer);

    }
    console.log("unit", unit);
    console.log("$event", $event);
    console.log("unit.checked = $event.checked;", unit.checked = $event.checked);
  }
  // interviewMarks = this.fb.group({
  //   unreserved: this.fb.group({
  //     interview_id: ['UR'],
  //     min_marks: [''],
  //     max_marks: [''],
  //   }),
  //   EWS: this.fb.group({
  //     interview_id: ['EWS'],
  //     min_marks: [''],
  //     max_marks: [''],
  //   }),
  //   OBC_NCL: this.fb.group({
  //     interview_id: ['OBC_NCL'],
  //     min_marks: [''],
  //     max_marks: [''],
  //   }),
  //   SC: this.fb.group({
  //     interview_id: ['SC'],
  //     min_marks: [''],
  //     max_marks: [''],
  //   }),
  //   ST: this.fb.group({
  //     interview_id: ['ST'],
  //     min_marks: [''],
  //     max_marks: [''],
  //   }),
  // })

  ngOnInit(): void {
    this.addDateItem();
    this.interviewMarks = this.fb.group({
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

  addDateItem() {
    this.dateRange = new DatesRange();
    this.dateList.push(this.dateRange);
    console.log(this.dateList);
  }

  deleteDateItem(id) {
    this.dateList.splice(id - 1, 1);
  }

  async addInterviewData() {
    let rel;
    this.interviewMaster = new InterviewMaster(this.addInterview.value);
    console.log("in", this.interviewMaster);
    rel = await this.InterviewMasterService.addInterview(this.interviewMaster);
    this.nextStep();
    if (!rel) {
      alert(this.InterviewMasterService.getErrorMessage);
    } else {
      this.nextStep();
    }
  }
  async Dates() {
    let rel;
    rel = this.InterviewMasterService.addInterviewDates(this.dateList);
    if (!rel) {
      alert(this.InterviewMasterService.getErrorMessage);
    } else {
      this.nextStep();
    }
  }

  async marks() {
    let rel
    this.interviewMark = new InterviewMark(this.addInterview.value);
    rel = await this.InterviewMasterService.interviewMarks(this.interviewMark);
    if (!rel) {
      alert(this.InterviewMasterService.getErrorMessage);
    } else {
      this.nextStep();
    }
  }
}




































 // this.interview = this.fb.group({
    //   Details: this.fb.group({
    //     interview_id: ['', [Validators.required]],
    //     interview_name: ['', [Validators.required]],
    //     notification: ['', [Validators.required]],
    //     status: ['yes', [Validators.required]],
    //   }),
    //   dates: this.fb.group({
    //     fromDate: ['', [Validators.required]],
    //     toDate: ['', [Validators.required]]
    //   }),
    //   marks: this.fb.group({
    //     unreserved_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     unreserved_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     EWS_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     EWS_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     OBC_NCL_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     OBC_NCL_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     SC_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     SC_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     ST_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //     ST_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   }),
    //   verification: this.fb.group({
    //     verfication_officer: ['', [Validators.required]],
    //     interviewDatesOfficer: ['', [Validators.required]]
    //   }),
    //   board: this.fb.group({
    //     boardName: ['', [Validators.required]],
    //     interviewDatesBoard: ['', [Validators.required]]
    //   }),
    //   chairman: this.fb.group({
    //     boardChairman: ['', [Validators.required]],
    //     member: ['', [Validators.required]],
    //   }),
    // })