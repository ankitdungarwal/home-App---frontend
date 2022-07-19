import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCallService } from '../service/http/http-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'ankit';
  password: string = '';
  errorMessage: string = 'Invalid user input, Please try again';
  isInvalid: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private authService: HttpCallService
  ) {}

  ngOnInit(): void {}

  checkValidation() {}
}
