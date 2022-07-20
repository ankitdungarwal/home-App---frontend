import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DairyNewComponent } from './dairy-new/dairy-new.component';
import { DairyComponent } from './dairy/dairy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
  },
  {
    path: 'dairy-new/:id',
    component: DairyNewComponent,
  },
  //{ path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
