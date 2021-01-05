import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {GuestUserMaster} from './model/GuestUserMaster';
import {GuestUserServiceService} from './guest-user-service.service';
import {Status} from '../constant';
import {UserMaster} from '../user-master/model/UserMaster';
import {ConfirmDialogComponent} from '../dialogs/confirm/confirm.component';
import {MessageDialogComponent} from '../dialogs/message/message.component';

@Component({
  selector: 'app-guest-master',
  templateUrl: './guest-master.component.html',
  styleUrls: ['./guest-master.component.scss']
})
export class GuestMasterComponent implements OnInit {
  status = Status;
  deleteUserId: number;
  users: GuestUserMaster[] = [];

  @ViewChild('confirmDlg', {static: false})
  confirmDlg: ConfirmDialogComponent;

  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private router: Router,
              private dialog: MatDialog,
              private guestUserService: GuestUserServiceService) {
  }

  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    let rel;
    rel = await this.guestUserService.fetchGuestUserList();
    if (rel) {
      this.users = this.guestUserService.getGuestUserList;
      console.log('this.users');
      console.log(this.users);
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

  updateUser(id: number) {
    this.router.navigate([`guest-users/add-guest-user/${id}`]);
  }

  async openDeleteUser(u: GuestUserMaster) {
    this.deleteUserId = u.id;
    this.confirmDlg.openDialog('Delete user',
      `Do you really want to delete user <b>${u.name}</b>?`,
      await this.onDeleteUser.bind(this));
  }

  async onDeleteUser(flag: boolean) {
    if (flag) {
      const rel = await this.guestUserService.deleteGuestUser(this.deleteUserId);
      if (rel) {
        this.loadData();
      } else {
        this.messageDlg.openDialog(this.guestUserService.getErrorMessage);
      }
    }
  }
}
