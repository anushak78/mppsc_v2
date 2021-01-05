import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BoardMasterService} from '../board-master.service';
import {BoardMaster} from '../model/board-master.model';
import {MessageDialogComponent} from '../../dialogs/message/message.component';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {
  boardMaster = new BoardMaster();
  activity: string;
  boardId: number;
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

  async onSubmit() {
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

  gotoPage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
