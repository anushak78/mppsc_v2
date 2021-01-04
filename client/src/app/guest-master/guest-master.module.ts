import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestMasterRoutingModule } from './guest-master-routing.module';
import { AddGuestMasterComponent } from './add-guest-master/add-guest-master.component';
import {SharedModule} from '../shared.module';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {GuestMasterComponent} from './guest-master.component';


@NgModule({
  declarations: [
    GuestMasterComponent,
    AddGuestMasterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    GuestMasterRoutingModule
  ]
})
export class GuestMasterModule { }
