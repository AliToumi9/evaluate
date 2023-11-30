import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {dataEvaluation} from "../evaluate-ihm-const/const-evaluate-list";
import {PopupService} from "../../popup/popup.service";

@Component({
  selector: 'app-evaluate-ihm-list',
  templateUrl: './evaluate-ihm-list.component.html',
  styleUrls: ['./evaluate-ihm-list.component.scss']
})
export class EvaluateIhmListComponent {
  nbreEval : number = 30;
  dataSource = dataEvaluation;

  constructor(private router : Router,
              private _popupService: PopupService) {
  }
  goBack() {
    this.router.navigate(['']);
  }

  filter(){
    const popup = this._popupService.openRotationRemarksDialog();
    popup.afterClosed().subscribe(confirmed => {

      if (confirmed === 'true') {

      } else if (confirmed != 'true') {
      }
    });
  }
}
