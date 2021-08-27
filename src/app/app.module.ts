import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersViewComponent } from './players/players-view/players-view.component';
import { PlayersCreateComponent } from './players/players-create/players-create.component';
import { PlayersEditComponent } from './players/players-edit/players-edit.component';
import { PlayersDeleteComponent } from './players/players-delete/players-delete.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayersViewComponent,
    PlayersCreateComponent,
    PlayersEditComponent,
    PlayersDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
