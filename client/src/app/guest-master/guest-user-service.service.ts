import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as apiUrl from '../apiUrls';
import {GuestUserMaster} from './model/GuestUserMaster';
import {DatesRange} from './model/DatesRange';

@Injectable({
  providedIn: 'root'
})
export class GuestUserServiceService {
  private httpErrorMessage = '';
  users: GuestUserMaster[] = [];
  guestUsersDetails: GuestUserMaster;

  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }

  get getGuestUserList(): GuestUserMaster[] {
    return this.users;
  }

  get getGuestUserDetailsData(): GuestUserMaster {
    return this.guestUsersDetails;
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

  async editGuestUser(user: GuestUserMaster) {
    return await this.http.post(
      apiUrl.getApiEditGuestUserMastercollectionEndPoint, user.toJSON()).toPromise()
      .then((response) => {
        console.log(response);
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this);
  }

  async addGuestUserDates(dateList: DatesRange[]) {
    console.log(dateList);
    const dateArray = [];
    for (const d of dateList) {
      console.log(d);
      dateArray.push(d.toJSON());
      console.log(d.toJSON());
    }
    console.log(dateArray);
    return await this.http.post(
      apiUrl.getApiAddGuestUserMasterDatescollectionEndPoint, {dates: dateArray}).toPromise()
      .then((response) => {
        console.log(response);
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this.errorHandler(error));
  }

  async editGuestUserDates(dateList: DatesRange[], userId: number) {
    console.log(dateList);
    const dateArray = [];
    for (const d of dateList) {
      console.log(d);
      dateArray.push(d.toJSON());
      console.log(d.toJSON());
    }
    console.log(dateArray);
    return await this.http.post(
      apiUrl.getApiEditGuestUserMasterDatescollectionEndPoint, {
        id: userId,
        dates: dateArray
      }).toPromise()
      .then((response) => {
        console.log(response);
        this.httpErrorMessage = response['message'];
        return true;
      }).catch((error) => this.errorHandler(error));
  }

  async getUserDetails(userId: number): Promise<boolean> {
    return await this.http.post(
      apiUrl.getApiDetailsGuestUserMastercollectionEndPoint(userId), {}
    ).toPromise()
      .then((response) => {
        this.guestUsersDetails = GuestUserMaster.fromJson(response['data']);
        console.log(this.guestUsersDetails);
        return true;
      }).catch(error => this.errorHandler(error));
  }
  async deleteGuestUser(userId: number): Promise<boolean> {
    return await this.http.post(
      apiUrl.getApiDeleteGuestUserMastercollectionEndPoint(userId), {}
    ).toPromise()
      .then((response) => {
        this.httpErrorMessage = ' Guest User deleted';
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
