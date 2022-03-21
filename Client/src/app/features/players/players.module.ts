import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersListItemComponent } from './players-list-item/players-list-item.component';
import { PlayersRoutingModule } from './players-routing.module';



@NgModule({
  declarations: [
    PlayersListComponent,
    PlayersListItemComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
