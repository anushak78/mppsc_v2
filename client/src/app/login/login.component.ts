import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    const rel = this.authService.login(userId, password, role);
    if (rel) {
      sessionStorage.setItem('role', this.signInForm.controls['role'].value);
      if (this.signInForm.controls['role'].value == 0) {
        this.router.navigate(['admin-dashboard']);
      }
      if (this.signInForm.controls['role'].value == 1) {
        this.router.navigate(['board-dashboard']);
      }
      if (this.signInForm.controls['role'].value == 2) {
        this.router.navigate(['vo-dashboard']);
      }
    }
  }
}
