import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {UserMaster} from './model/UserMaster';
import {UserMasterService} from './user-master.service';
import {ConfirmDialogComponent} from '../dialogs/confirm/confirm.component';
import {MessageDialogComponent} from '../dialogs/message/message.component';
import {Roles, Status, Titles} from '../constant';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {

  deleteUserId: number;
  deleteUserName: string;
  users: UserMaster[] = [];
  roles = Roles;
  status = Status;
  @ViewChild('confirmDlg', {static: false})
  confirmDlg: ConfirmDialogComponent;

  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private router: Router,
              private dialog: MatDialog,
              private userMasterService: UserMasterService) {
  }

  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const rel = await this.userMasterService.fetchUserList();
    if (rel) {
      this.users = this.userMasterService.getUserList;
      console.log(this.users);
    } else {
      alert(this.userMasterService.getErrorMessage);
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
  }

  updateUser(id: number) {
    this.router.navigate([`users/add-user/${id}`]);
  }

  async openDeleteUser(u: UserMaster) {
    this.deleteUserId = u.id;
    this.deleteUserName = u.name;
    this.confirmDlg.openDialog('Delete user',
      `Confirmation 1: Do you really want to delete user <b>${this.deleteUserName}</b>?`,
      await this.openDeleteUser2.bind(this));
  }

  async openDeleteUser2(flag: boolean) {
    if (flag) {
      this.confirmDlg.openDialog('Delete user',
        `Confirmation 2: Do you really want to delete user <b>${this.deleteUserName}</b>?`,
        await this.openDeleteUser3.bind(this));
    }
  }

  async openDeleteUser3(flag: boolean) {
    if (flag) {
      this.confirmDlg.openDialog('Delete user',
        `Confirmation 3: Do you really want to delete user <b>${this.deleteUserName}</b>?`,
        await this.onDeleteUser.bind(this));
    }
  }

  async onDeleteUser(flag: boolean) {
    if (flag) {
      const rel = await this.userMasterService.deleteUser(this.deleteUserId);
      if (rel) {
        this.loadData();
      } else {
        this.messageDlg.openDialog(this.userMasterService.getErrorMessage);
      }
    }
  }

}
