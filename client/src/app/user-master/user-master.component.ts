import {Component, OnInit, ViewChildren, QueryList, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {UserMaster} from "./model/UserMaster";
import {UserMasterService} from "./user-master.service";

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  submitted = false;
  users: UserMaster[] = [];
  // data = []
  data = [
    {user_id: '123', name: 'a1', title: 'abc', role: 'some data', designation: 'manager', status: null},
    {user_id: '456', name: 'a2', title: 'def', role: 'some data', designation: 'manager', status: null},
    {user_id: '789', name: 'a3', title: 'ghi', role: 'some data', designation: 'manager', status: null},
    {user_id: '123', name: 'a4', title: 'abc', role: 'some data', designation: 'manager', status: null},
    {user_id: '456', name: 'a5', title: 'def', role: 'some data', designation: 'manager', status: null},
    {user_id: '789', name: 'a6', title: 'ghi', role: 'some data', designation: 'manager', status: null},
    {user_id: '123', name: 'a7', title: 'abc', role: 'some data', designation: 'manager', status: null},
    {user_id: '456', name: 'a8', title: 'def', role: 'some data', designation: 'manager', status: null},
    {user_id: '789', name: 'a9', title: 'ghi', role: 'some data', designation: 'manager', status: null},
  ]

  userData = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl(null, [
      Validators.required,
    ]),
    role: new FormControl(null, [
      Validators.required,
    ]),
    // user_id: new FormControl('', [
    //   Validators.required,
    // ]),
    // password: new FormControl('', [
    //   Validators.required,
    // ]),
    // confirm_password: new FormControl('', [
    //   Validators.required,
    // ]),
  });
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  constructor(private router: Router,
              private dialog: MatDialog, private userMasterService: UserMasterService) {
  }

  async ngOnInit() {
    this.displayedColumns = ['id', 'name', 'title', 'role', 'designation', 'status', 'edit']
    this.table_data = new MatTableDataSource(this.data);
    let rel = await this.userMasterService.fetchUserList();
    if (rel) {
      this.users = this.userMasterService.getUserList;
      console.log(this.users)
      this.table_data = new MatTableDataSource(this.users);
    } else {
      alert(this.userMasterService.getErrorMessage);
    }
  }

  ngAfterViewInit() {
    this.table_data.paginator = this.paginator.toArray()[0];
  }

  // openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
  //   let config = {
  //     position: {
  //       top: '0px',
  //       right: '0px'
  //     },
  //     height: '100%',
  //     width: '50vw',
  //     panelClass: 'full-screen-modal',
  //   };
  //   this.dialog.open(templateRef, config)
  // }

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

  deldata(colIndex) {
    this.data.splice(colIndex, 1);
    this.table_data = new MatTableDataSource(this.data)
    console.log("colIndex", this.data);
  }

  check() {
    if (this.userData.invalid) {
      console.log("invalid");
      Object.keys(this.userData.controls).forEach(key => {
        this.userData.get(key).markAsTouched();
      });
      return;
    } else {
      console.log("data:", this.userData.value);
      this.dialog.closeAll();
    }
  }

  updateUser(id: number) {
      this.router.navigate([`users/add-users/${id}`]);
  }

  deleteUser() {

  }
}
