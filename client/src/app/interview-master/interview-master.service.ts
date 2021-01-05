import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as apiUrl from '../apiUrls';
import { InterviewMaster } from './model/interview-master.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewMasterService {

  private httpErrorMessage = '';
  interview: InterviewMaster[] = [];
  constructor(private http: HttpClient) { }

  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }

  get getInterviewList(): InterviewMaster[] {
    return this.interview;
  }

  async fetchInterviewList(): Promise<boolean> {
    return await this.http.get(
      apiUrl.getApiInterviewMasterEndPoint).toPromise()
      .then((response) => {
        let result = response['data'];
        this.interview = [];
        for (let i of result) {
          this.interview.push(InterviewMaster.fromJson(i));
        }
        console.log(this.interview);
        return true;
      }).catch(error => this.errorHandler(error));
  }

  async addInterview(interview: InterviewMaster) {
    return await this.http.post(
      apiUrl.getApiAddInterviewMasterEndPoint, interview.toJSON()).toPromise()
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
