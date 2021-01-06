import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpErrorMessage: string;
  private user;

  get getErrorMessage(): string {
    return this.httpErrorMessage;
  }

  constructor(private http: HttpClient) {
  }

  public get currentUserValue(): User {
    return this.user;
  }

  async login(username: string, password: string, role: Number) {
    return this.http.post('/ui/login', {login: username, password: password, role: role})
      .toPromise().then((user => {
        console.log(user);
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.user = user; 
        return true;
      })).catch((error: HttpErrorResponse) => {
        console.log(error);
        this.errorHandler(error);
        return false;
      });
  }

  logout() {
    sessionStorage.removeItem('currentUser');
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
