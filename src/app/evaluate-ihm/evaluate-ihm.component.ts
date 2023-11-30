import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-evaluate-ihm',
  templateUrl: './evaluate-ihm.component.html',
  styleUrls: ['./evaluate-ihm.component.scss']
})
export class EvaluateIHMComponent {
  title = 'evaluate';

  constructor(  private _router: Router) {
  }

  redirectToEvaluateSection(){
    this._router.navigate(["/evallist"]);
  }
}
