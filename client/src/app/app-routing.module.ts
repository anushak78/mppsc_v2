import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { BoardMasterComponent } from './board-master/board-master.component';
import { GuestMasterComponent } from './guest-master/guest-master.component';
import { InterviewMasterComponent } from './interview-master/interview-master.component';
import { CandidateMasterComponent } from './candidate-master/candidate-master.component';
import { VoDashboardComponent } from './vo-dashboard/vo-dashboard.component';
import { BoardDashboardComponent } from './board-dashboard/board-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'users',
        loadChildren: () => import('./user-master/user-master.module').then(
          m => m.UserMasterModule
        )
      },
      {
        path: 'board-master',
        component: BoardMasterComponent
      },
      {
        path: 'guest-master',
        component: GuestMasterComponent
      },
      {
        path: 'interview-master',
        component: InterviewMasterComponent
      },
      {
        path: 'candidate-master',
        component: CandidateMasterComponent
      },
      {
        path: 'vo-dashboard',
        component: VoDashboardComponent
      },
      {
        path: 'board-dashboard',
        component: BoardDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
