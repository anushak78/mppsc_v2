import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as apiUrl from '../apiUrls';
import { GuestUserMaster } from './model/GuestUserMaster';

@Injectable({
  providedIn: 'root'
})
export class GuestUserServiceService {
  private httpErrorMessage = '';
  users: GuestUserMaster[] = [];
  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }
  get getGuestUserList(): GuestUserMaster[] {
    return this.users;
  }

  constructor(private http: HttpClient) {
  }

  async fetchGuestUserList(): Promise<boolean> {
    return await this.http.get(
      apiUrl.getApiGuestUserMastercollectionEndPoint).toPromise()
      .then((response) => {
        const result = response['data'];
        console.log(result);
        this.users = [];
        for (const u of result) {
          this.users.push(GuestUserMaster.fromJson(u));
        }
        return true;
      }).catch(error => this.errorHandler(error));
  }

  async addGuestUser(user: GuestUserMaster) {
    return await this.http.post(
      apiUrl.getApiAddGuestUserMastercollectionEndPoint, user.toJSON()).toPromise()
      .then((response) => {
        console.log(response);
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this);
  }

  async addGuestUserDates(user_dates) {
    return await this.http.post(
      apiUrl.getApiAddGuestUserMasterDatescollectionEndPoint, {dates: user_dates}).toPromise()
      .then((response) => {
        console.log(response)
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
