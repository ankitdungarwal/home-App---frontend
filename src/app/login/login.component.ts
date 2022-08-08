import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../register/register.component';
import { HttpCallService, Login } from '../service/http/http-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'ankit';
  password: string = '';
  login: Login | undefined;
  user: Users | undefined;
  errorMessage: string = 'Invalid user input, Please try again';
  isInvalid: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private authService: HttpCallService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  checkValidation() {
    this.login = new Login(this.username, this.password);
    this.authService.checkLoginStatus(this.login);
    this.user = this.authService.user;
    console.log('user details got back post login ' + this.user?.firstName);
    if (this.user === null) {
      this.isInvalid = true;
    } else {
      this.router.navigate(['/welcome']);
    }
  }
}
