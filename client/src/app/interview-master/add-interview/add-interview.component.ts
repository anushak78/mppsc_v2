import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { BoardMasterService } from 'src/app/board-master/board-master.service';
import { BoardMaster } from 'src/app/board-master/model/board-master.model';
import { Roles } from 'src/app/constant';
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


@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent implements OnInit {
  interviewMaster = new InterviewMaster();

  dates = this.interviewMaster.dates;
  marks = this.interviewMaster.marks;
  // verificationOfficer = this.interviewMaster.verificationOfficer;
  // boardInterview = this.interviewMaster.boardInterview;
  chairmanBoard = this.interviewMaster.chairmanBoard;

  dateRange = new DatesRange();
  dateList: DatesRange[] = [];
  verificationOfficerList: UserMaster[] = [];
  boardList: BoardMaster[] = [];
  userList: UserMaster[] = [];
  guestList: GuestUserMaster[] = [];
  tabIndex = 0;
  activity: string;
  dropdownSettings = {};
  dropdownSettings_1 = {};
  selectedItems = [];
  selectedItems_1 = [];
  check_mat = true;
  roles = Roles;
  // selectedItems: Map<string, Array<any>> = [];
  // selectedItems_1: Map<string, Array<any>> = [];

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
      // this.verificationOfficer = this.interviewMaster.verificationOfficer;
      // this.boardInterview = this.interviewMaster.boardInterview;
      this.chairmanBoard = this.interviewMaster.chairmanBoard;
      if (this.dateList.length === 0) {
        this.addDateItem();
      }
    } else {
      this.activity = 'Add';
      this.addDateItem();
    }
    await this.loadData();
    await this.multiselect();
  }

  async loadData() {
    const rel = await this.BoardMasterService.fetchBoardList() &&
      await this.UserMasterService.fetchUserList() &&
      await this.GuestUserServiceService.fetchGuestUserList()
    if (rel) {
      this.boardList = this.BoardMasterService.getBoardList;
      this.userList = this.UserMasterService.getUserList;
      this.guestList = this.GuestUserServiceService.getGuestUserList;

      this.verificationOfficerList = this.userList.filter(function (item) {
        return item.role == 3;
      })
      this.userList = this.userList.filter(function (item) {
        return item.role == 0 || item.role == 1;
      })

      console.log("this.verificationOfficerList", this.verificationOfficerList)
      console.log("this.userList", this.userList);

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

  // valueChange(unit, $event, i) {
  //   if ($event.checked) {
  //     let arr = this.dateList[i];
  //     console.log("officer", this.verificationOfficer);
  //     console.log("event", $event);
  //     console.log("let arr", arr);

  //   }
  //   console.log("unit.checked = $event.checked;", unit.checked = $event.checked);
  // }

  async multiselect() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: "userId",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
    };

    this.dropdownSettings_1 = {
      singleSelection: false,
      idField: "id",
      textField: "boardName",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
    }
  }

  onItemSelect(item: any, i) {
    this.dateList[i].verificationOfficer.push(item)
    console.log("this.dateRange.verificationOffice.push(item);", this.dateRange)
  }
  onSelectAll(items: any, i) {
    items.forEach(element => {
      this.dateList[i].verificationOfficer.push(element)
    });
  }
  onItemDeSelect(item: any, i) {
    if (item.lenght == 1) {
      this.dateList[i].verificationOfficer.splice(0, 1);
    }
    else {
      this.onDeSelectAll(item, i);
    }
  }
  onDeSelectAll(item: any, i) {
    this.dateList[i].verificationOfficer.splice(0, this.verificationOfficerList.length)
  }


  onItemSelectboard(item: any, i) {
    this.dateList[i].boardMaster.push(item)
  }

  onSelectAllboard(items: any, i) {
    items.forEach(element => {
      this.dateList[i].boardMaster.push(element)
    });
  }
  onItemDeSelectboard(item: any, i) {
    if (item.lenght == 1) {
      this.dateList[i].boardMaster.splice(0, 1);
    }
    else {
      this.onDeSelectAllboard(item, i);
    }
  }
  onDeSelectAllboard(item: any, i) {
    this.dateList[i].boardMaster.splice(0, this.boardList.length)
  }
  // guest: GuestUserMaster[];
  
  checkedList = [];
  onCheckboxChange(option, event) {
    if (event.target.checked) {
      this.checkedList.push(option.id);
    } else {
      for (var i = 0; i < this.guestList.length; i++) {
        if (this.checkedList[i] == option.id) {
          this.checkedList.splice(i, 1);
        }
      }
    }
    console.log(this.checkedList);
  }

  a1() {
    this.dateList.forEach(item =>
      this.interviewMaster.dates.push(item)
    )
    // this.chairmanBoard.guestMember.push(this.guest)
    console.log("this.interview", this.interviewMaster);
  }
}