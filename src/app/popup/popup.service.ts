import {Injectable} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FilterUserComponent} from "./rotation-remarks-user/filter-user.component";

@Injectable()
export class PopupService {

  constructor(private dialog: MatDialog) { }


  /** */
  openRotationRemarksDialog(): MatDialogRef<FilterUserComponent, any> {
    return this.dialog.open(FilterUserComponent, {
      width: '40%',

    });
  }

}

