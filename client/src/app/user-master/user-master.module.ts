import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserMasterComponent} from './user-master.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UserMasterRoutingModule} from './user-master-routing.module';
import {AddUserComponent} from './add-user/add-user.component';
import {SharedModule} from '../shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    UserMasterComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UserMasterRoutingModule,
    SharedModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule
  ]
})
export class UserMasterModule {
}
