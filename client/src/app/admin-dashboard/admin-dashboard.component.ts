import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  appList = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.appList = [
      'User Master',
      'Guest User Master',
      'Board Master',
      'Interview Master',
      'Candidate Master'
    ];
  }

  goto(pageName: string) {
    this.router.navigate([pageName]);
  }


  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
