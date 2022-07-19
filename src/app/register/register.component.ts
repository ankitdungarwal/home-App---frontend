import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { HttpCallService } from '../service/http/http-call.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {} as Users;
  error: string = '';
  errorPrompt: boolean = false;

  constructor(private service: HttpCallService) {}

  ngOnInit(): void {}

  submit() {
    console.log('inside submit method/function' + this.user);
    //this.service.getAllUsers();
    this.service.saveUserDetails(this.user);
  }

  consume() {
    console.log('something got ' + this.user.userName);
  }
}

export class Users {
  constructor(
    public id: number,
    public userName: string,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Date,
    public email: string,
    public password: string,
    public address1: string,
    public address2: string,
    public address3: string,
    public pincode: number,
    public remarks: string,
    public comments: string,
    public col1: string,
    public col2: string,
    public col3: string,
    public col4: string,
    public col5: string,
    public col6: string,
    public col7: string,
    public isAdmin: boolean
  ) {}
}
