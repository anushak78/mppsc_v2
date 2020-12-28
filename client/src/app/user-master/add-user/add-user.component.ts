import {Component, OnInit} from '@angular/core';
import {UserMaster} from '../model/UserMaster';
import {UserMasterService} from '../user-master.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userMaster = new UserMaster();

  constructor(private userMasterService: UserMasterService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    alert(JSON.stringify(this.userMaster));
    let rel;
    rel = await this.userMasterService.addUser(this.userMaster);
    if (!rel) {
      alert(this.userMasterService.getErrorMessage);
    } else {
      alert(this.userMasterService.getErrorMessage);
      this.router.navigate([`/users`]);
    }
  }
}
