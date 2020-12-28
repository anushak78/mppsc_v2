import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {UserMasterComponent} from './user-master.component';


const routes: Routes = [
  {
    path: '',
    component: UserMasterComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMasterRoutingModule { }
