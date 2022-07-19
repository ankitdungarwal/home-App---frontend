import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from 'src/app/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class HttpCallService {
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
      .subscribe((data) => console.log(data));
  }

  checkLoginStatus(login: Login) {
    return this.http
      .post('http://localhost:8080/users/login', login)
      .subscribe((data) => console.log('working'));
  }
}

export class Login {
  constructor(private username: string, private password: string) {}
}
