import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as apiUrl from '../apiUrls';
import {UserMaster} from './model/UserMaster';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {
  private httpErrorMessage = '';
  users: UserMaster[] = [];
  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }
  get getUserList(): UserMaster[] {
    return this.users;
  }

  constructor(private http: HttpClient) {
  }

  async fetchUserList(): Promise<boolean> {
    return await this.http.get(
      apiUrl.getApiUserMastercollectionEndPoint).toPromise()
      .then((response) => {
        let result = response['data'];
        this.users = [];
        for (let u of result) {
          this.users.push(UserMaster.fromJson(u));
        }
        console.log(this.users);
        return true;
      }).catch(error => this.errorHandler(error));
  }

  async addUser(user: UserMaster) {
    return await this.http.post(
      apiUrl.getApiAddUserMastercollectionEndPoint, user.toJSON()).toPromise()
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
