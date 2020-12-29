import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoardMasterService } from '../board-master.service';
import { BoardMaster } from '../model/board-master.model';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {
  BoardMaster = new BoardMaster();

  constructor(private BoardMasterService: BoardMasterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  boardData = new FormGroup({
    subject_name: new FormControl('', [
      Validators.required,
    ]),
    no_of_members: new FormControl(null, [
      Validators.required,
    ]),
    board_id: new FormControl(null, [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
    ]),
  });

  async onSubmit() {
    let rel;
    rel = await this.BoardMasterService.addBoard(this.BoardMaster);

    if (this.boardData.invalid ) {
      Object.keys(this.boardData.controls).forEach(key => {
        this.boardData.get(key).markAsTouched();
      });
      return;
    }
    else {
      this.router.navigate([`/board-master`]);
    }
  }
}
