import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {MessageDialogComponent} from '../dialogs/message/message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  signInForm = new FormGroup({
    user_id: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    role: new FormControl(null, [
      Validators.required,
    ])
  });

  constructor(private router: Router,
              private authService: LoginService) {
  }

  ngOnInit() {
  }

  canSubmit(): boolean {
    return this.signInForm.valid;
  }

  async submit() {
    const userId = this.signInForm.controls['user_id'].value;
    const password = this.signInForm.controls['password'].value;
    const role = this.signInForm.controls['role'].value;
    const rel = await this.authService.login(userId, password, role);
    if (rel) {
      sessionStorage.setItem('role', role);
      const user = this.authService.currentUserValue;
      console.log(user);
      if (user['authenticated'] === true) {
        if (role === 0) {
          this.router.navigate(['admin-dashboard']);
        }
        if (role === 4) {
          this.router.navigate(['board-dashboard']);
        }
        if (role === 3) {
          this.router.navigate(['vo-dashboard']);
        }
      } else {
        this.messageDlg.openDialog('Invalid credentials!!');
      }
    } else {
      this.messageDlg.openDialog(this.authService.getErrorMessage);
    }
  }
}
