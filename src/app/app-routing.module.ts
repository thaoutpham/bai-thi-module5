import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayersListComponent} from './players/players-list/players-list.component';
import {PlayersViewComponent} from './players/players-view/players-view.component';
import {PlayersCreateComponent} from './players/players-create/players-create.component';
import {PlayersEditComponent} from './players/players-edit/players-edit.component';
import {PlayersDeleteComponent} from './players/players-delete/players-delete.component';

const routes: Routes = [
  {
    path: 'players/list',
    component: PlayersListComponent
  }, {
    path: 'players/view',
    component: PlayersViewComponent
  }, {
    path: 'players/create',
    component: PlayersCreateComponent
  }, {
    path: 'players/edit/:id',
    component: PlayersEditComponent
  }, {
    path: 'players/delete/:id',
    component: PlayersDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
