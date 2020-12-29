import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as apiUrl from '../apiUrls';
import { BoardMaster } from './model/board-master.model';

@Injectable({
  providedIn: 'root'
})
export class BoardMasterService {

  private httpErrorMessage = '';
  board: BoardMaster[] = [];
  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }
  get getBoardList(): BoardMaster[] {
    return this.board;
  }

  constructor(private http: HttpClient) {
  }

  async fetchBoardList(): Promise<boolean> {
    return await this.http.get(
      apiUrl.getApiBoardMastercollectionEndPoint).toPromise()
      .then((response) => {
        let result = response['data'];
        this.board = [];
        for (let u of result) {
          this.board.push(BoardMaster.fromJson(u));
        }
        console.log(this.board);
        return true;
      }).catch(error => this.errorHandler(error));
  }

  async addBoard(board: BoardMaster) {
    return await this.http.post(
      apiUrl.getApiAddBoardMastercollectionEndPoint, board.toJSON()).toPromise()
      .then((response) => {
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this);
  }

  errorHandler(error: HttpErrorResponse): boolean {
    if (error.status === 400) {
      this.httpErrorMessage = 'Server Error';
    } else if (error.status === 403) {
      this.httpErrorMessage = 'Forbidden!!';
    } else {
      this.httpErrorMessage = 'Server Error!!';
    }
    return false;
  }
}
