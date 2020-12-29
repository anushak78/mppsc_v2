import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardMasterService } from './board-master.service';
import { BoardMaster } from './model/board-master.model';

@Component({
  selector: 'app-board-master',
  templateUrl: './board-master.component.html',
  styleUrls: ['./board-master.component.scss']
})
export class BoardMasterComponent implements OnInit {

  displayedColumns: string[];
  table_data;
  board: BoardMaster[] = [];

  constructor(private router: Router,
    private BoardMasterService: BoardMasterService) {
  }

  async ngOnInit() {
    let rel = await this.BoardMasterService.fetchBoardList();
    if (rel) {
      this.board = this.BoardMasterService.getBoardList;
      // this.table_data = new MatTableDataSource(this.board);
    } else {
      alert(this.BoardMasterService.getErrorMessage);
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

  updateBoard(id: number) {
    this.router.navigate([`board-master/add-board/${id}`]);
  }
}
