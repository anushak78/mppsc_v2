import {Component, OnInit, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  userData = new FormGroup({
    user_id: new FormControl('', [
      Validators.required,
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl(null, [
      Validators.required,
    ]),
    role: new FormControl(null, [
      Validators.required,
    ]),
    status: new FormControl(null, [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
    ]),
  });
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  constructor(private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = ['user_id', 'title', 'role', 'status', 'edit']
    let data = []
    data = [
      {user_id: '123', title: 'abc', role: 'some data', status: null},
      {user_id: '456', title: 'def', role: 'some data', status: null},
      {user_id: '789', title: 'ghi', role: 'some data', status: null},
      {user_id: '123', title: 'abc', role: 'some data', status: null},
      {user_id: '456', title: 'def', role: 'some data', status: null},
      {user_id: '789', title: 'ghi', role: 'some data', status: null}                                                                                                                                                        
    ]
    this.table_data = new MatTableDataSource(data)
  }

  ngAfterViewInit() {
    this.table_data.paginator = this.paginator.toArray()[0];
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    let config = {
      position: {
        top: '0px',
        right: '0px'
      },
      height: '100%',
      width: '50vw',
      panelClass: 'full-screen-modal',
    };
    this.dialog.open(templateRef, config)
  }

  editDialogWithTemplateRef(templateRef: TemplateRef<any>, user_data) {
    let config = {
      position: {
        top: '0px',
        right: '0px'
      },
      height: '100%',
      width: '50vw',
      panelClass: 'full-screen-modal',
    };
    //setting of data
    this.userData.controls['name'].setValue(user_data.name);
    this.dialog.open(templateRef, config)
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
