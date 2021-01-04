import {Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GuestUserMaster } from './model/GuestUserMaster';
import { GuestUserServiceService } from './guest-user-service.service';

@Component({
  selector: 'app-guest-master',
  templateUrl: './guest-master.component.html',
  styleUrls: ['./guest-master.component.scss']
})
export class GuestMasterComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  guestData = new GuestUserMaster();
  guestUserData = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl(null, [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    phone_no: new FormControl('', [
      Validators.required,
    ]),
    status: new FormControl(null, [
      Validators.required,
    ])
  });
  tabIndex = 0
  parentTabIndex = 0
  date_list = []
  flag_dates = false
  flag_edit = false
  editGuestUserData;
  users = []
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  constructor(private router: Router,
    private dialog: MatDialog,
    private guestUserService: GuestUserServiceService) {
  }

  async ngOnInit() {
    this.tabIndex = 0
    this.parentTabIndex = 0
    this.date_list = []
    this.date_list.push({id: 1, to_date: '', from_date: ''})
    this.displayedColumns = ['id', 'name', 'title', 'email', 'status', 'edit']
    let data = []
    data = [
      {user_id: '123', title: 'abc', name: 'abc', email: 'some data', status: null},
      {user_id: '456', title: 'def', name: 'abc', email: 'some data', status: null},
      {user_id: '789', title: 'ghi', name: 'abc', email: 'some data', status: null},
      {user_id: '123', title: 'abc', name: 'abc', email: 'some data', status: null},
      {user_id: '456', title: 'def', name: 'abc', email: 'some data', status: null},
      {user_id: '789', title: 'ghi', name: 'abc', email: 'some data', status: null}                                                                                                                                                        
    ]
    this.table_data = new MatTableDataSource(data)
    let rel;
    rel = await this.guestUserService.fetchGuestUserList()
    if (rel) {
      this.users = this.guestUserService.getGuestUserList
      this.table_data = new MatTableDataSource(this.users)
    }
  }

  ngAfterViewInit() {
    this.table_data.paginator = this.paginator.toArray()[0];
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.table_data.filter = filterValue;
  }

  async onNext() {
    this.guestData['name'] = this.guestUserData.controls['name'].value
    this.guestData['title'] = this.guestUserData.controls['title'].value
    this.guestData['email'] = this.guestUserData.controls['email'].value
    this.guestData['phone_no'] = this.guestUserData.controls['phone_no'].value
    this.guestData['status'] = this.guestUserData.controls['status'].value
    this.guestData['id'] = null
    let rel;
    rel = await this.guestUserService.addGuestUser(this.guestData);
    if (!rel) {
      alert(this.guestUserService.getErrorMessage);
    } else {
      alert(this.guestUserService.getErrorMessage);
      this.guestUserData = new FormGroup({
        name: new FormControl('', [
          Validators.required,
        ]),
        title: new FormControl(null, [
          Validators.required,
        ]),
        email: new FormControl('', [
          Validators.required,
        ]),
        phone_no: new FormControl('', [
          Validators.required,
        ]),
        status: new FormControl(null, [
          Validators.required,
        ])
      });
      if (this.guestUserService.getErrorMessage == 'success')
        this.tabIndex = 1
    }
  }

  addDateItem() {
    let len = this.date_list.length+1
    this.date_list.push({id: len, to_date: '', from_date: ''})
  }

  deleteDateItem(id) {
    this.date_list.splice(id-1, 1)
    for (let i in this.date_list) {
      this.date_list[i] = i+1
    }
  }

  nextActivated() {
    return this.guestUserData.invalid
  }

  async addDates() {
    console.log(this.date_list)
    this.flag_dates = true
    let rel_dates;
    rel_dates = await this.guestUserService.addGuestUserDates(this.date_list)
    if (!rel_dates) {
      alert(this.guestUserService.getErrorMessage);
      this.date_list = []
      this.date_list.push({id: 1, to_date: '', from_date: ''})
      this.parentTabIndex = 0
    } else {
      alert(this.guestUserService.getErrorMessage);
      this.date_list = []
      this.date_list.push({id: 1, to_date: '', from_date: ''})
      this.parentTabIndex = 0
    }
  }

  edit(element) {
    this.parentTabIndex = 2
    this.flag_edit = true
    console.log(element)
    this.editGuestUserData = element
  }

}
