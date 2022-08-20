import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { DairyComponent } from './dairy/dairy.component';
import { DairyNewComponent } from './dairy-new/dairy-new.component';
import { DairyMonthlyTrackerComponent } from './dairy/monthy/dairy-monthly-tracker/dairy-monthly-tracker.component';
import { GuardService } from './service/guard.service';
import { RecurringComponent } from './recurring/recurring.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DairyComponent,
    DairyNewComponent,
    DairyMonthlyTrackerComponent,
    RecurringComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [GuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
