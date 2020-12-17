import {Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-master',
  templateUrl: './interview-master.component.html',
  styleUrls: ['./interview-master.component.scss']
})
export class InterviewMasterComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  constructor(private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'notification_no', 'status', 'edit']
    let data = []
    data = [
      {id: '123', name: 'abc', notification_no: 'some data', status: null},
      {id: '456', name: 'def', notification_no: 'some data', status: null},
      {id: '789', name: 'ghi', notification_no: 'some data', status: null},
      {id: '123', name: 'abc', notification_no: 'some data', status: null},
      {id: '456', name: 'def', notification_no: 'some data', status: null},
      {id: '789', name: 'ghi', notification_no: 'some data', status: null}                                                                                                                                                        
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
