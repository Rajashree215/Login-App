import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertmsgService {
  horizontal:MatSnackBarHorizontalPosition='end';
  vertical:MatSnackBarVerticalPosition='top';

  constructor(private _snackbar:MatSnackBar) { }

  openAlertMsg(msg: string, close: string = 'Close') {
    this._snackbar.open(msg, close, {
      horizontalPosition: this.horizontal,
      verticalPosition: this.vertical,
      duration: 5000,
    });
  }
}
