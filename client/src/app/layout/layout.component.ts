import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Roles, Status, Titles} from '../constant';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  roles: string;
  roleMaster = Roles;

  constructor(private router: Router) {
    console.log('hiii');
  }

  ngOnInit(): void {
    this.roles = sessionStorage.getItem('role');
    if (this.roles === '0') {
      this.router.navigate(['/admin-dashboard']);
    } else if (this.roles === '1') {
      this.router.navigate(['/board-dashboard']);
    } else if (this.roles === '2') {
      this.router.navigate(['/vo-dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(pageName) {
    sessionStorage.removeItem('role');
    this.gotoPage(pageName);
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

}
