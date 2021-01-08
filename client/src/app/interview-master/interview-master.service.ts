import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as apiUrl from '../apiUrls';
import { DatesRange } from './model/dates-range.model';
import { InterviewMaster } from './model/interview-master.model';
import { Marks } from './model/marks.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewMasterService {

  private httpErrorMessage = '';
  interview: InterviewMaster[] = [];
  Marks: Marks[] = [];
  addResponse
  constructor(private http: HttpClient) { }

  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }

  get response(): any {
    return this.addResponse;
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
        this.addResponse = response
        return true;
      }).catch((error) => this);
  }

  async deleteInterview(interviewId): Promise<boolean> {
    return await this.http.post(
      apiUrl.getApiDeleteInterviewMasterEndPoint(interviewId), {}
    ).toPromise()
      .then((response) => {
        this.httpErrorMessage = ' User deleted';
        return true;
      }).catch(error => this.errorHandler(error));
  }

  async editInterview(interview: InterviewMaster) {
    return await this.http.post(
      apiUrl.getApiEditInterviewMastercollectionEndPoint, interview.toJSON()).toPromise()
      .then((response) => {
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this.errorHandler(error));
  }

  async addInterviewDates(dateList: DatesRange[]) {
    console.log(dateList);
    const dateArray = [];
    for (const d of dateList) {
      console.log(d);
      dateArray.push(d.toJSON());
    }
    console.log(dateArray);
    return await this.http.post(
      apiUrl.getApiDatesInterviewMastercollectionEndPoint, { dates: dateArray }).toPromise()
      .then((response) => {
        console.log(response);
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this.errorHandler(error));
  }

  async interviewMarks(interview: Marks) {
    return await this.http.post(
      apiUrl.getApiInterviewMarksEndPoint, interview.toJSON()).toPromise()
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
