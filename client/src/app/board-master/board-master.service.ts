import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as apiUrl from '../apiUrls';
import {BoardMaster} from './model/board-master.model';
import {GuestUserMaster} from "../guest-master/model/GuestUserMaster";

@Injectable({
  providedIn: 'root'
})
export class BoardMasterService {

  private httpErrorMessage = '';
  board: BoardMaster[] = [];
  boardDetails: BoardMaster;

  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }

  get getBoardList(): BoardMaster[] {
    return this.board;
  }

  get getBoardData(): BoardMaster {
    return this.boardDetails;
  }

  constructor(private http: HttpClient) {
  }

  async fetchBoardList(): Promise<boolean> {
    return await this.http.get(
      apiUrl.getApiBoardMastercollectionEndPoint).toPromise()
      .then((response) => {
        const result = response['data'];
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
      }).catch((error) => this.errorHandler(error));
  }

  async editBoard(board: BoardMaster) {
    return await this.http.post(
      apiUrl.getApiEditBoardMastercollectionEndPoint, board.toJSON()).toPromise()
      .then((response) => {
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this.errorHandler(error));
  }

  async getBoardDetails(boardId: number): Promise<boolean> {
    return await this.http.post(
      apiUrl.getApiDetailsBoardUserMastercollectionEndPoint(boardId), {}
    ).toPromise()
      .then((response) => {
        this.boardDetails = BoardMaster.fromJson(response['data']);
        console.log(this.boardDetails);
        return true;
      }).catch(error => this.errorHandler(error));
  }

  async deleteBoardData(boardId: number): Promise<boolean> {
    return await this.http.post(
      apiUrl.getApiDeleteBoardUserMastercollectionEndPoint(boardId), {}
    ).toPromise()
      .then((response) => {
        this.httpErrorMessage = ' Board Data deleted';
        return true;
      }).catch(error => this.errorHandler(error));
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
