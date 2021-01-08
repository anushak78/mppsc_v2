import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm/confirm.component';
import { MessageDialogComponent } from 'src/app/dialogs/message/message.component';
import { InterviewMasterService } from '../interview-master.service';
import { DatesRange } from '../model/dates-range.model';
import { InterviewMaster } from '../model/interview-master.model';
import { MapVerficationOfficer } from '../model/map-verfication-officer.model';
import { Marks } from '../model/marks.model';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent implements OnInit {
  interviewMaster = new InterviewMaster();
  dateRange = new DatesRange();
  Marks = new Marks();
  MapVerficationOfficer = new MapVerficationOfficer();
  tabIndex = 0
  activity: string
  id = 1
  Officer = [{ name: 'Nseit' }];
  board = [{ name: 'A1' }];
  chairman = [{ name: 'A1' }]
  interview: FormGroup;
  dateList: DatesRange[] = [];
  date = [{ fromDate: '2019', toDate: '2021' }, { fromDate: '2020', toDate: '2021' }]
  officer: MapVerficationOfficer[] = [];
  interviewId
  verficationofficername
  Interviewmarks: Marks[] = [];

  @ViewChild('confirmDlg', { static: false })
  confirmDlg: ConfirmDialogComponent;

  @ViewChild('messageDlg', { static: false })
  messageDlg: MessageDialogComponent;

  constructor(private InterviewMasterService: InterviewMasterService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private httpClient: HttpClient) { }

  async openSubmitUser() {
    this.confirmDlg.openDialog('Add User',
      `Do you want to add this detail of user <b>${this.interviewMaster.name}</b>?`,
      await this.addInterviewData.bind(this));
  }

  ngOnInit(): void {
    this.addDateItem();
    if (this.route.snapshot.params.userId !== undefined) {
      this.activity = 'Edit';
    } else {
      this.activity = 'Add';
    }
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
    this.dateRange.id = this.id
    this.dateList.push(this.dateRange);
    console.log(this.dateList);
  }

  deleteDateItem(id) {
    this.dateList.splice(id - 1, 1);
  }

  async addInterviewData() {
    let rel;
    rel = await this.InterviewMasterService.addInterview(this.interviewMaster)
    if (!rel) {
      alert(this.InterviewMasterService.getErrorMessage);
    } else {
      this.id = this.InterviewMasterService.response['id'];
      console.log('this.InterviewMasterService.response', this.InterviewMasterService.response)
      await this.nextStep();
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

  addmarks(){
    console.log("Marks",this.Marks);
  }
  // async addmarks() {
  //   let rel

  //   // Object.keys(this.interviewMarks.controls).forEach(key => {
  //   //   let u = this.interviewMarks.get(key).value
  //   //   this.Interviewmarks.push(u);
  //   //   //this.Marks = new Marks(u);
  //   //   console.log("Marks", this.Marks);
  //   // }
  //   // );
  //   // this.Marks = new Marks(this.marks.value);
  //   // console.log("Marks", this.Marks);
  //   // this.Marks = new Marks(this.Interviewmarks);
  //   //console.log("Marks", this.Marks);
  //   console.log("marksssss", this.Interviewmarks);
  //   rel = await this.InterviewMasterService.interviewMarks(this.Marks)

  //   if (!rel) {
  //     alert(this.InterviewMasterService.getErrorMessage);
  //   } else {
  //     this.router.navigate([`/interview-master`]);
  //   }
  // }

  // valueChangeVerification(unit, $event) {
  //   if ($event.checked) {
  //     this.officer.push(unit);
  //     console.log("officer", this.officer);
  //   }
  //   console.log("unit", unit);
  //   console.log("$event", $event);
  //   console.log("unit.checked = $event.checked;", unit.checked = $event.checked);
  // }
}


 // this.interviewMarks = this.fb.group({
    //   unreserved_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   unreserved_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   EWS_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   EWS_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   OBC_NCL_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   OBC_NCL_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   SC_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   SC_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   ST_max: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   ST_min: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    // })



    // interviewMarks = this.fb.group({
    //   interview_id: [''],

    //   marks: this.fb.array([
    //     // n1


    //     {
    //       marks_type: '1',
    //       min_marks: '',
    //       max_marks: '',
    //     },
    //     {
    //       marks_type: '2',
    //       min_marks: '',
    //       max_marks: '',
    //     },
    //     {
    //       marks_type: '3',
    //       min_marks: '',
    //       max_marks: '',
    //     },
    //     {
    //       marks_type: '4',
    //       min_marks: '',
    //       max_marks: '',
    //     },
    //     {
    //       marks_type: '4',
    //       min_marks: '',
    //       max_marks: '',
    //     },
    //   ])
    // })





























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