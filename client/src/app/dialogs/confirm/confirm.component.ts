// Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
//
// This program and the accompanying materials are made available
// under the terms described in the LICENSE file which accompanies
// this distribution. If the LICENSE file was not attached to this
// distribution or for further clarifications, please contact
// legal@nseit.com.
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog,
        MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: '<div></div>'
})
export class ConfirmDialogComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog(title: string, message: string, callback: Function) {
    this.dialog.open(ConfirmDialog, {
      data: {
        title,
        message,
        callback
      }
    });
  }
}


@Component({
  selector: 'app-confirm',
  templateUrl: 'confirm.component.html',
})
export class ConfirmDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data);
  }

  close(flag: boolean) {
    this.dialogRef.close();
    this.data.callback(flag);
  }
}
