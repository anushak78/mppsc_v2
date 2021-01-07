import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GuestUserServiceService} from '../guest-user-service.service';
import {GuestUserMaster} from '../model/GuestUserMaster';
import {MessageDialogComponent} from '../../dialogs/message/message.component';
import {DatesRange} from '../model/DatesRange';
import {ConfirmDialogComponent} from '../../dialogs/confirm/confirm.component';

@Component({
  selector: 'app-add-guest-master',
  templateUrl: './add-guest-master.component.html',
  styleUrls: ['./add-guest-master.component.scss']
})
export class AddGuestMasterComponent implements OnInit {
  tabIndex = 1;
  dateList: DatesRange[] = [];
  dateRange = new DatesRange();
  flagDates = false;
  guestData = new GuestUserMaster();
  activity: string;
  userId: number;

  @ViewChild('confirmDlg', {static: false})
  confirmDlg: ConfirmDialogComponent;

  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private guestUserService: GuestUserServiceService) {
  }

  async ngOnInit() {
    this.tabIndex = 0;
    if (this.route.snapshot.params.userId !== undefined) {
      this.activity = 'Edit';
      this.userId = this.route.snapshot.params.userId;
      await this.loadUserDetails();
    } else {
      this.activity = 'Add';
      this.dateList.push(this.dateRange);
    }
  }

  async loadUserDetails() {
    const rel = await this.guestUserService.getUserDetails(this.route.snapshot.params.userId);
    if (rel) {
      this.guestData = this.guestUserService.getGuestUserDetailsData;
      this.dateList = this.guestData.dates;
      if (this.dateList.length === 0) {
        this.addDateItem();
      }
    } else {
      this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

  async onNext() {
    let rel;
    if (this.activity === 'Edit') {
      rel = await this.guestUserService.editGuestUser(this.guestData);
    } else {
      rel = await this.guestUserService.addGuestUser(this.guestData);
    }
    if (!rel) {
      this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
    } else {
      this.tabIndex = 1;
    }
  }

  addDateItem() {
    this.dateRange = new DatesRange();
    this.dateList.push(this.dateRange);
    console.log(this.dateList);
  }

  deleteDateItem(id) {
    this.dateList.splice(id - 1, 1);
  }

  async addDates() {
    console.log(this.dateList);
    let relDates;
    if (this.activity === 'Edit') {
      relDates = await this.guestUserService.editGuestUserDates(this.dateList, this.userId);
    } else {
      relDates = await this.guestUserService.addGuestUserDates(this.dateList);
    }
    if (!relDates) {
      this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
    } else {
      // this.flagDates = true;
      this.gotoPage('guest-users');
    }
  }

  sendEmail() {
    this.messageDlg.openDialog('Email Sent!!!');
  }
}
