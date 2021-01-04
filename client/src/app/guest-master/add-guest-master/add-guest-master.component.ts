import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestUserServiceService} from "../guest-user-service.service";
import {GuestUserMaster} from "../model/GuestUserMaster";
import {MessageDialogComponent} from "../../dialogs/message/message.component";

@Component({
  selector: 'app-add-guest-master',
  templateUrl: './add-guest-master.component.html',
  styleUrls: ['./add-guest-master.component.scss']
})
export class AddGuestMasterComponent implements OnInit {
  tabIndex = 1;
  parentTabIndex = 0;
  date_list = [];
  flag_dates = false;
  flag_edit = false;
  editGuestUserData;
  guestData = new GuestUserMaster();
  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private router: Router,
              private guestUserService: GuestUserServiceService) {
  }

  ngOnInit(): void {
    this.tabIndex = 0;
    this.parentTabIndex = 0;
    this.date_list = [];
    this.date_list.push({id: 1, to_date: '', from_date: ''});
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

  async onNext() {
    let rel;
    rel = await this.guestUserService.addGuestUser(this.guestData);
    if (!rel) {
      this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
    } else {
      this.tabIndex = 1;
    }
  }

  addDateItem() {
    let len = this.date_list.length + 1;
    this.date_list.push({id: len, to_date: '', from_date: ''})
  }

  deleteDateItem(id) {
    this.date_list.splice(id - 1, 1);
    for (let i in this.date_list) {
      this.date_list[i] = i + 1;
    }
  }

  nextActivated() {
    // return this.guestUserData.invalid
  }

  async addDates() {
    console.log(this.date_list);
    this.flag_dates = true;
    let relDates;
    relDates = await this.guestUserService.addGuestUserDates(this.date_list);
    if (!relDates) {
      this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
    }
  }

  sendEmail() {
    this.messageDlg.openDialog('Email Sent!!!');
  }


}
