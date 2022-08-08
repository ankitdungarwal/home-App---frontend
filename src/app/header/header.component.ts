import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../service/http/http-call.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpCallService) {}

  ngOnInit(): void {}

  logoutUser() {
    this.http.logoutUser();
  }
}
