import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InterviewMasterService } from './interview-master.service';
import { InterviewMaster } from './model/interview-master.model';

@Component({
  selector: 'app-interview-master',
  templateUrl: './interview-master.component.html',
  styleUrls: ['./interview-master.component.scss']
})
export class InterviewMasterComponent implements OnInit {

  displayedColumns: string[];
  interview: InterviewMaster[] = []
  table_data;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  constructor(private router: Router,
    private InterviewMasterService: InterviewMasterService) {
  }

  async ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const rel = await this.InterviewMasterService.fetchInterviewList();
    if (rel) {
      this.interview = this.InterviewMasterService.getInterviewList;
    } else {
      alert(this.InterviewMasterService.getErrorMessage);
    }
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
