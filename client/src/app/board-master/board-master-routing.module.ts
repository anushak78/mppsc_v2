import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBoardComponent } from './add-board/add-board.component';
import { BoardMasterComponent } from './board-master.component';
import { BoardMasterModule } from './board-master.module';


const routes: Routes = [
  { 
    path: '', 
    component: BoardMasterComponent 
  },
  {
    path:'add-board',
    component: AddBoardComponent 
  },
  {
    path: 'add-board/:boardId',
    component: AddBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardMasterRoutingModule { }
