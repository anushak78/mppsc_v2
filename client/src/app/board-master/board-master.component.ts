import {Component, OnInit, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-master',
  templateUrl: './board-master.component.html',
  styleUrls: ['./board-master.component.scss']
})
export class BoardMasterComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  boardData = new FormGroup({
    subject_name: new FormControl('', [
      Validators.required,
    ]),
    no_of_members: new FormControl(null, [
      Validators.required,
    ]),
    login_id: new FormControl(null, [
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
    this.displayedColumns = ['board_id', 'login', 'password', 'status', 'edit']
    let data = []
    data = [
      {board_id: '123', login: 'abc', password: 'some data', status: null},
      {board_id: '456', login: 'def', password: 'some data', status: null},
      {board_id: '789', login: 'ghi', password: 'some data', status: null},
      {board_id: '123', login: 'abc', password: 'some data', status: null},
      {board_id: '456', login: 'def', password: 'some data', status: null},
      {board_id: '789', login: 'ghi', password: 'some data', status: null}                                                                                                                                                        
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

  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.table_data.filter = filterValue;
  }

}
