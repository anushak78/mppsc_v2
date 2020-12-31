import {Component, OnInit} from '@angular/core';
import {UserMaster} from '../model/UserMaster';
import {UserMasterService} from '../user-master.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userMaster = new UserMaster();
  activity: string;

  constructor(private userMasterService: UserMasterService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.userId !== undefined) {
      this.activity = 'Edit';
      this.loadUserDetails();
    } else {
      this.activity = 'Add';
    }
  }

  async loadUserDetails() {
    const rel = this.userMasterService.getUserDetails(this.route.snapshot.params.userId);
    if (rel) {
      this.userMaster = this.userMasterService.getUserDetailsData;
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

  async onSubmit() {
    let rel;
    rel = await this.userMasterService.addUser(this.userMaster);
    if (!rel) {
      alert(this.userMasterService.getErrorMessage);
    } else {
      this.router.navigate([`/users`]);
    }
  }
}
