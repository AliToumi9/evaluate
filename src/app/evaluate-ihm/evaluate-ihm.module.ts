// ---------------------------------------------------------------
// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
// ---------------------------------------------------------------
// Components

// ---------------------------------------------------------------
// Services

// --------------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import {EvaluateIHMComponent} from "./evaluate-ihm.component";
import {EvaluateIhmService} from "./evaluate-ihm.service";
import { EvaluateIhmListComponent } from './evaluate-ihm-list/evaluate-ihm-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AppMaterialModule} from "../../assets/material/material.module";
import {MatTabsModule} from "@angular/material/tabs";
@NgModule({
  imports: [
    AppMaterialModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EvaluateIHMComponent,
    EvaluateIhmListComponent,
  ],
  providers: [
    EvaluateIhmService,
  ],
  exports:[EvaluateIHMComponent],
})
export class EvaluateIhmModule { }
