import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PopupService } from './popup.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FilterUserComponent} from "./rotation-remarks-user/filter-user.component";
import {FilterUserService} from "./rotation-remarks-user/filter-user.service";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    FlexLayoutModule,
  ],
  exports: [
    FilterUserComponent,

  ],
  declarations: [
    FilterUserComponent,
  ],
  providers: [
    PopupService,FilterUserService
  ]
})
export class PopupModule { }
