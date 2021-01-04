import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private InterviewMasterService: InterviewMasterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  interview = new FormGroup({
    Details: new FormGroup({
      interview_id: new FormControl('', [
        Validators.required,
      ]),
      interview_name: new FormControl('', [
        Validators.required,
      ]),
      notification: new FormControl('', [
        Validators.required,
      ]),
      status: new FormControl('yes', [
        Validators.required,
      ]),
    }),
    dates: new FormGroup({
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required])
    }),
    marks: new FormGroup({
      unreserved_max: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      unreserved_min: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      EWS_max: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      EWS_min: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      OBC_NCL_max: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      OBC_NCL_min: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      SC_max: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      SC_min: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ST_max: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ST_min: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    }),
    verification: new FormGroup({
      verfication_officer: new FormControl('', [Validators.required]),
      interviewDatesOfficer: new FormControl('', [Validators.required])
    }),
    board: new FormGroup({
      boardName: new FormControl('', [Validators.required]),
      interviewDatesBoard: new FormControl('', [Validators.required])
    }),
    chairman: new FormGroup({
      boardChairman: new FormControl('', [Validators.required]),
      member: new FormControl('', [Validators.required])
    }),
  })

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

  async onSubmit() {
    let rel;
    rel = await this.InterviewMasterService.addInterview(this.InterviewMaster);
    if (!rel) {
      alert(this.InterviewMasterService.getErrorMessage);
    } else {
      this.router.navigate([`/interview-master`]);
    }
  }
}
