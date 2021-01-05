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
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'users',
        loadChildren: () => import('./user-master/user-master.module').then(
          m => m.UserMasterModule
        )
      },
      {
        path: 'boards',
        loadChildren: () => import('./board-master/board-master.module').then(
          m => m.BoardMasterModule
        )
      },
      {
        path: 'guest-users',
        loadChildren: () => import('./guest-master/guest-master.module').then(
          m => m.GuestMasterModule
        )
      },
      {
        path: 'interview-master',
        loadChildren: () => import('./interview-master/interview-master.module').then(
          m => m.InterviewMasterModule
        )
      },
      // {
      //   path: 'interview-master',
      //   component: InterviewMasterComponent
      // },
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
