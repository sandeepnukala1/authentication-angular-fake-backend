import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from 'src/app/common/components/alert/alert.component';
import { RequiredValidationComponent } from 'src/app/common/components/required-validation/required-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BhesLoginRoutingModule } from './bhes-login.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BhesLoginComponent } from './bhes-login.component';

@NgModule({
  declarations: [
    BhesLoginComponent,
    RequiredValidationComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    BhesLoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BhesLoginModule { }
