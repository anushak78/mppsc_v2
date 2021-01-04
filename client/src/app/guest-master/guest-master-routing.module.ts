import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuestMasterComponent} from './guest-master.component';
import {AddGuestMasterComponent} from './add-guest-master/add-guest-master.component';


const routes: Routes = [
  {
    path: '',
    component: GuestMasterComponent,
  },
  {
    path: 'add-guest-user',
    component: AddGuestMasterComponent
  },
  {
    path: 'add-guest-user/:userId',
    component: AddGuestMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestMasterRoutingModule {
}
