import {Component, OnInit, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vo-dashboard',
  templateUrl: './vo-dashboard.component.html',
  styleUrls: ['./vo-dashboard.component.scss']
})
export class VoDashboardComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  constructor(private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'board_name', 'status']
    let data = []
    data = [
      {id: '123', name: 'abc', board_name: 'some data', status: null},
      {id: '456', name: 'def', board_name: 'some data', status: null},
      {id: '789', name: 'ghi', board_name: 'some data', status: null},
      {id: '123', name: 'abc', board_name: 'some data', status: null},
      {id: '456', name: 'def', board_name: 'some data', status: null},
      {id: '789', name: 'ghi', board_name: 'some data', status: null}                                                                                                                                                        
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
