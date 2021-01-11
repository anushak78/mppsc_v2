import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as apiUrl from '../apiUrls';
import { InterviewMaster } from './model/interview-master.model';
import { Marks } from './model/marks.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewMasterService {

  InterviewMaster: InterviewMaster
  private httpErrorMessage = '';
  interviewData: InterviewMaster[] = [];
  Marks: Marks[] = [];
  constructor(private http: HttpClient) { }

  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }

  get getInterviewList(): InterviewMaster[] {
    return this.interviewData;
  }

  get getInterviewDetailsData(): InterviewMaster {
    return this.InterviewMaster;
  }
  async fetchInterviewList(): Promise<boolean> {
    return await this.http.get(
      apiUrl.getApiInterviewMasterEndPoint).toPromise()
      .then((response) => {
        let result = response['data'];
        this.interviewData = [];
        for (let i of result) {
          this.interviewData.push(InterviewMaster.fromJson(i));
        }
        console.log(this.interviewData);
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

  async interviewUserDetails(interviewId: number) {
    return await this.http.post(
      apiUrl.getApiInterviewDetailscollectionEndPoint(interviewId), {}
    ).toPromise().then((response) => {
      this.InterviewMaster = InterviewMaster.fromJson(response['data']);
      return true;
    }).catch(
      error => this.errorHandler(error)
    );
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
