import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from 'src/app/register/register.component';
import { GuardService } from '../guard.service';

@Injectable({
  providedIn: 'root',
})
export class HttpCallService {
  user: Users | undefined;
  error: string = '';
  loginSuccess: boolean = false;
  isAdmin: string = 'false';

  constructor(private http: HttpClient) {}

  // working fine to get all the users data; not using it as of now, will implement it later
  getAllUsers() {
    return this.http
      .get<Users>('http://localhost:8080/users/all')
      .subscribe((data) => {
        console.log(data);
      });
  }

  saveUserDetails(user: Users) {
    console.log(user.firstName + ' inside service class');
    return this.http
      .post<Users>('http://localhost:8080/users/create', user)
      .subscribe(
        (data) => {
          console.log(data);
          this.user = data;
          alert('registered!!');
        },
        (error) => {
          this.error = error.error.message;
          if (this.error.match('user.UK')) {
            alert('duplicate UserName, please use another user name');
          }
        }
      );
  }

  checkLoginStatus(login: Login) {
    return this.http
      .post<Users>('http://localhost:8080/users/login', login)
      .subscribe(
        (data) => {
          console.log('working');
          this.user = data;
          this.loginSuccess = true;
          sessionStorage.setItem('authenticated', 'true');
          if (this.user.isAdmin === true) {
            sessionStorage.setItem('isAdmin', 'true');
          } else sessionStorage.setItem('isAdmin', 'false');
        },
        (error) => {
          alert('invalid Login details');
          this.loginSuccess = false;
        }
      );
  }

  logoutUser() {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('isAdmin');
  }
}

export class Login {
  constructor(private username: string, private password: string) {}
}
