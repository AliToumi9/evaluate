import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppModuleRoutingModule} from "./app-module-routing.module";
import {EvaluateIhmModule} from "./evaluate-ihm/evaluate-ihm.module";
import {AppMaterialModule} from "../assets/material/material.module";
import {PopupModule} from "./popup/popup.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PopupModule,
    AppModuleRoutingModule,
    BrowserModule,
    EvaluateIhmModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
