import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpCallService } from './http/http-call.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  isAuth: string = '';
  constructor() {}
  canActivate(): boolean {
    console.log('loginsuccess status inside guard service');
    if (sessionStorage.getItem('authenticated') != null) return true;
    else return false;
  }
}
