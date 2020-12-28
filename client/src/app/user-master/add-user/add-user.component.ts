import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  model: any = {};

  onSubmit() {
    this.router.navigate([`/users`]);
    console.log(JSON.stringify(this.model, null, 4));
  }
}
