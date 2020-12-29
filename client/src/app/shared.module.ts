/**
 * Created by krishna on 26/2/20.
 */
// Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
//
// This program and the accompanying materials are made available
// under the terms described in the LICENSE file which accompanies
// this distribution. If the LICENSE file was not attached to this
// distribution or for further clarifications, please contact
// legal@nseit.com.
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MessageDialogComponent
} from './dialogs/message/message.component';
import {ConfirmDialogComponent} from './dialogs/confirm/confirm.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    MessageDialogComponent,
    ConfirmDialogComponent
  ],
  exports: [
    MessageDialogComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule {
}
