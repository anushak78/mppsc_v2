import {Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-master',
  templateUrl: './guest-master.component.html',
  styleUrls: ['./guest-master.component.scss']
})
export class GuestMasterComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  guestUserData = new FormGroup({
    user_id: new FormControl('', [
      Validators.required,
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl(null, [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    status: new FormControl(null, [
      Validators.required,
    ]),
    phone_no: new FormControl('', [
      Validators.required,
    ])
  });
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  constructor(private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = ['user_id', 'title', 'email', 'status', 'edit']
    let data = []
    data = [
      {user_id: '123', title: 'abc', email: 'some data', status: null},
      {user_id: '456', title: 'def', email: 'some data', status: null},
      {user_id: '789', title: 'ghi', email: 'some data', status: null},
      {user_id: '123', title: 'abc', email: 'some data', status: null},
      {user_id: '456', title: 'def', email: 'some data', status: null},
      {user_id: '789', title: 'ghi', email: 'some data', status: null}                                                                                                                                                        
    ]
    this.table_data = new MatTableDataSource(data)
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

}
