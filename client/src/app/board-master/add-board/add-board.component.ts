import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BoardMasterService} from '../board-master.service';
import {BoardMaster} from '../model/board-master.model';
import {MessageDialogComponent} from '../../dialogs/message/message.component';
import {ConfirmDialogComponent} from '../../dialogs/confirm/confirm.component';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {
  boardMaster = new BoardMaster();
  activity: string;
  boardId: number;
  @ViewChild('confirmDlg', {static: false})
  confirmDlg: ConfirmDialogComponent;
  @ViewChild('messageDlg', {static: false})
  messageDlg: MessageDialogComponent;

  constructor(private boardMasterService: BoardMasterService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  async ngOnInit() {
    if (this.route.snapshot.params.boardId !== undefined) {
      this.activity = 'Edit';
      this.boardId = this.route.snapshot.params.boardId;
      await this.loadBoardDetails();
    } else {
      this.activity = 'Add';
    }
  }

  async loadBoardDetails() {
    const rel = await this.boardMasterService.getBoardDetails(this.route.snapshot.params.boardId);
    if (rel) {
      this.boardMaster = this.boardMasterService.getBoardData;
    } else {
      this.messageDlg.openDialog(this.boardMasterService.getErrorMessage);
    }
  }

  async openAddBoardConfirmation() {
    this.confirmDlg.openDialog('Add Board',
      `Do you really want to add this board <b>${this.boardMaster.boardName}</b>?`,
      await this.onSubmit.bind(this));
  }

  async onSubmit(flag: boolean) {
    if (flag) {
      let rel;
      if (this.activity === 'Edit') {
        rel = await this.boardMasterService.editBoard(this.boardMaster);
      } else {
        rel = await this.boardMasterService.addBoard(this.boardMaster);
      }
      if (rel) {
        this.gotoPage('boards');
      } else {
        this.messageDlg.openDialog(this.boardMasterService.getErrorMessage);
      }
    }
  }

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
