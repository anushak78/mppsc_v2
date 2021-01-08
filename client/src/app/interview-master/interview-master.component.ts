import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../dialogs/confirm/confirm.component';
import { MessageDialogComponent } from '../dialogs/message/message.component';
import { InterviewMasterService } from './interview-master.service';
import { InterviewMaster } from './model/interview-master.model';
import { Status} from '../constant';

@Component({
  selector: 'app-interview-master',
  templateUrl: './interview-master.component.html',
  styleUrls: ['./interview-master.component.scss']
})
export class InterviewMasterComponent implements OnInit {

  displayedColumns: string[];
  interview: InterviewMaster[] = []
  table_data;
  deleteInterviewId;
  deleteInterviewName;
  status = Status;

  @ViewChild('confirmDlg', {static: false})
  confirmDlg: ConfirmDialogComponent;

  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;
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

  editInterview(id) {
    console.log("id",id);
    this.router.navigate([`interview-master/add-interview/${id}`]);
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.table_data.filter = filterValue;
  }

  async openDeleteInterview(u: InterviewMaster) {
    console.log("user",u);
    
    this.deleteInterviewId = u.interview_id;
    this.deleteInterviewName = u.name;
    this.confirmDlg.openDialog('Delete Interview',
      `Confirmation 1: Do you really want to delete Interview <b>${this.deleteInterviewName}</b>?`,
      await this.openDeleteInterview2.bind(this));
  }

  async openDeleteInterview2(flag: boolean) {
    if (flag) {
      this.confirmDlg.openDialog('Delete Interview',
        `Confirmation 2: Do you really want to delete Interview <b>${this.deleteInterviewName}</b>?`,
        await this.openDeleteInterview3.bind(this));
    }
  }

  async openDeleteInterview3(flag: boolean) {
    if (flag) {
      this.confirmDlg.openDialog('Delete Interview',
        `Confirmation 3: Do you really want to delete Interview <b>${this.deleteInterviewName}</b>?`,
        await this.onDeleteInterview.bind(this));
    }
  }

  async onDeleteInterview(flag: boolean) {
    console.log("flag",flag);
    if (flag) {
      console.log("deleteInterviewId",this.deleteInterviewId);
      const rel = await this.InterviewMasterService.deleteInterview(this.deleteInterviewId);
      if (rel) {
        this.loadData();
      } else {
        this.messageDlg.openDialog(this.InterviewMasterService.getErrorMessage);
      }
    }
  }
}
