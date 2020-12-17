import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  role;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')
    if (this.role == 0) {
      this.role = 'Admin'
    }
    if (this.role == 1) {
      this.role = 'Board'
    }
    if (this.role == 2) {
      this.role = 'Verification Officer'
    }
  }
  
  logout() {
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

}
