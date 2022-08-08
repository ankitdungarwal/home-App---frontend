import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DairyNewComponent } from './dairy-new/dairy-new.component';
import { DairyComponent } from './dairy/dairy.component';
import { DairyMonthlyTrackerComponent } from './dairy/monthy/dairy-monthly-tracker/dairy-monthly-tracker.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './service/guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dairy',
    component: DairyComponent,
    canActivate: [GuardService],
  },
  {
    path: 'dairy-new/:id',
    component: DairyNewComponent,
  },
  {
    path: 'dairyCalculate',
    component: DairyMonthlyTrackerComponent,
  },
  //{ path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
