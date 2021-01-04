import {Component, OnInit, ViewChild} from '@angular/core';
import {UserMaster} from '../model/UserMaster';
import {UserMasterService} from '../user-master.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageDialogComponent} from '../../dialogs/message/message.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userMaster = new UserMaster();
  activity: string;


  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private userMasterService: UserMasterService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  async ngOnInit() {
    if (this.route.snapshot.params.userId !== undefined) {
      this.activity = 'Edit';
      await this.loadUserDetails();
    } else {
      this.activity = 'Add';
    }
  }

  async loadUserDetails() {
    const rel = await this.userMasterService.getUserDetails(this.route.snapshot.params.userId);
    if (rel) {
      this.userMaster = this.userMasterService.getUserDetailsData;
      console.log('this.userMaster');
      console.log(this.userMaster);
    } else {
      this.messageDlg.openDialog(this.userMasterService.getErrorMessage);
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

  async onSubmit() {
    let rel;
    if (this.activity === 'Add') {
      rel = await this.userMasterService.addUser(this.userMaster);
    } else {
      console.log('this.userMaster2');
      console.log(this.userMaster);
      rel = await this.userMasterService.updateUser(this.userMaster);
    }

    if (!rel) {
      alert(this.userMasterService.getErrorMessage);
    } else {
      this.router.navigate([`/users`]);
    }
  }
}
