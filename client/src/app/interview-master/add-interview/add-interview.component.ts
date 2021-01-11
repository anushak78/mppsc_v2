import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardMasterService } from 'src/app/board-master/board-master.service';
import { BoardMaster } from 'src/app/board-master/model/board-master.model';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm/confirm.component';
import { MessageDialogComponent } from 'src/app/dialogs/message/message.component';
import { GuestUserServiceService } from 'src/app/guest-master/guest-user-service.service';
import { GuestUserMaster } from 'src/app/guest-master/model/GuestUserMaster';
import { UserMaster } from 'src/app/user-master/model/UserMaster';
import { UserMasterService } from 'src/app/user-master/user-master.service';
import { InterviewMasterService } from '../interview-master.service';
import { BoardInterview } from '../model/board-interview.model';
import { DatesRange } from '../model/dates-range.model';
import { InterviewMaster } from '../model/interview-master.model';
import { Marks } from '../model/marks.model';
import { VerificationOfficer } from '../model/verification-officer.model';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent implements OnInit {
  interviewMaster = new InterviewMaster();

  marks = this.interviewMaster.marks;
  verificationOfficer = this.interviewMaster.verificationOfficer;
  boardInterview = this.interviewMaster.boardInterview;
  chairmanBoard = this.interviewMaster.chairmanBoard;

  dateRange = new DatesRange();
  dateList: DatesRange[] = [];
  verificationOfficerList: VerificationOfficer[] = [];
  boardList: BoardMaster[] = [];
  userList: UserMaster[] = [];
  guestList: GuestUserMaster[] = [];
  tabIndex = 0
  activity: string

  @ViewChild('confirmDlg', { static: false })
  confirmDlg: ConfirmDialogComponent;

  @ViewChild('messageDlg', { static: false })
  messageDlg: MessageDialogComponent;

  constructor(private InterviewMasterService: InterviewMasterService,
    private route: ActivatedRoute,
    private BoardMasterService: BoardMasterService,
    private UserMasterService: UserMasterService,
    private GuestUserServiceService: GuestUserServiceService) { }

  async openSubmitUser() {
    this.confirmDlg.openDialog('Add User',
      `Do you want to add this detail of user <b>${this.interviewMaster.name}</b>?`,
      await this.addInterviewData.bind(this));
  }

  async ngOnInit() {
    if (this.route.snapshot.params.userId !== undefined) {
      this.activity = 'Edit';
      this.interviewMaster = this.InterviewMasterService.getInterviewDetailsData;
      this.dateList = this.interviewMaster.dates;
      this.marks = this.interviewMaster.marks;
      this.verificationOfficer = this.interviewMaster.verificationOfficer;
      this.boardInterview = this.interviewMaster.boardInterview;
      this.chairmanBoard = this.interviewMaster.chairmanBoard;
      if (this.dateList.length === 0) {
        this.addDateItem();
      }
    } else {
      this.activity = 'Add';
      this.addDateItem();
    }
    await this.loadData();
  }

  async loadData() {
    const rel = await this.BoardMasterService.fetchBoardList() &&
      await this.UserMasterService.fetchUserList() &&
      await this.GuestUserServiceService.fetchGuestUserList()
    if (rel) {
      this.boardList = this.BoardMasterService.getBoardList;
      this.userList = this.UserMasterService.getUserList;
      this.guestList = this.GuestUserServiceService.getGuestUserList;
    } else {
      alert("Error");
    }
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

  onNext() {
    this.tabIndex += 1;
  }

  async addDateItem() {
    this.dateRange = new DatesRange();
    this.dateList.push(this.dateRange);
    console.log(this.dateList);
  }

  async deleteDateItem(id) {
    this.dateList.splice(id - 1, 1);
  }

  async addInterviewData() {
    let rel;

    if (this.activity === 'Edit') {
      rel = await this.InterviewMasterService.editInterview(this.interviewMaster)
    } else {
      rel = await this.InterviewMasterService.addInterview(this.interviewMaster)
    }
    if (!rel) {
      this.messageDlg.openDialog(this.InterviewMasterService.getErrorMessage);
    } else {
      this.messageDlg.openDialog("success");
    }
  }

  valueChange(unit, $event) {
    if ($event.checked) {
      console.log("officer", this.verificationOfficer);
    }
    console.log("unit.checked = $event.checked;", unit.checked = $event.checked);
  }
}