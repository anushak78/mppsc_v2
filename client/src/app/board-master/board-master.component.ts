import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {BoardMasterService} from './board-master.service';
import {BoardMaster} from './model/board-master.model';
import {GuestUserMaster} from "../guest-master/model/GuestUserMaster";
import {ConfirmDialogComponent} from "../dialogs/confirm/confirm.component";
import {MessageDialogComponent} from "../dialogs/message/message.component";
import {Status} from "../constant";

@Component({
  selector: 'app-board-master',
  templateUrl: './board-master.component.html',
  styleUrls: ['./board-master.component.scss']
})
export class BoardMasterComponent implements OnInit {

  boardList: BoardMaster[] = [];
  boardId: number;
  boardName: string;
  status = Status;
  @ViewChild('confirmDlg', {static: false})
  confirmDlg: ConfirmDialogComponent;

  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private router: Router,
              private boardMasterService: BoardMasterService) {
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    const rel = await this.boardMasterService.fetchBoardList();
    if (rel) {
      this.boardList = this.boardMasterService.getBoardList;
    } else {
      alert(this.boardMasterService.getErrorMessage);
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }

  updateBoard(id: number) {
    this.router.navigate([`boards/add-board/${id}`]);
  }

  async openDeleteBoard(u: BoardMaster) {
    this.boardId = u.id;
    this.boardName = u.boardName;
    this.confirmDlg.openDialog('Delete board',
      `Confirmation 1: Do you really want to delete user <b>${this.boardName}</b>?`,
      await this.openDeleteBoard2.bind(this));
  }

  async openDeleteBoard2(flag: boolean) {
    if (flag) {
      this.confirmDlg.openDialog('Delete board',
        `Confirmation 2: Do you really want to delete user <b>${this.boardName}</b>?`,
        await this.openDeleteBoard3.bind(this));
    }
  }

  async openDeleteBoard3(flag: boolean) {
    if (flag) {
      this.confirmDlg.openDialog('Delete board',
        `Confirmation 3: Do you really want to delete user <b>${this.boardName}</b>?`,
        await this.onDeleteBoard.bind(this));
    }
  }

  async onDeleteBoard(flag: boolean) {
    if (flag) {
      const rel = await this.boardMasterService.deleteBoardData(this.boardId);
      if (rel) {
        this.loadData();
      } else {
        this.messageDlg.openDialog(this.boardMasterService.getErrorMessage);
      }
    }
  }

}
