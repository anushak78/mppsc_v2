import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { InterviewMasterComponent } from './interview-master.component';


const routes: Routes = [
  {
    path: '',
    component: InterviewMasterComponent,
  },
  {
    path: 'add-interview',
    component: AddInterviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewMasterRoutingModule { }
