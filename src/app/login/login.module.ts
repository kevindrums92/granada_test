import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from "@angular/forms";
import { AsyncLoaderService } from "app/services/base/async-loader.service";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers:[
    AsyncLoaderService
  ]
})
export class LoginModule { }
