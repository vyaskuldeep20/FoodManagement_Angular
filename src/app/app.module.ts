import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { UserModule } from "./user/user.module";
import { HomeComponent } from "./home/home.component";
import { CommonModule, DatePipe } from "@angular/common";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
import { NavbarComponent } from './navbar/navbar.component';
import { CommonDataService } from "./common/common-data.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NoopAnimationsModule,
    UserModule,
    ProjectModule,
    TaskModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe,CommonDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
