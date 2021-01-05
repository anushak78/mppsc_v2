import {Component, OnInit, ViewChildren, QueryList, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {BoardMaster} from '../board-master/model/board-master.model';
import {MessageDialogComponent} from '../dialogs/message/message.component';

@Component({
  selector: 'app-board-dashboard',
  templateUrl: './board-dashboard.component.html',
  styleUrls: ['./board-dashboard.component.scss']
})
export class BoardDashboardComponent implements OnInit {

  boardData = new BoardMaster();
  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName])
  }

}
